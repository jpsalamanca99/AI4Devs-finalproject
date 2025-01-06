import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class GroupCreator {
  static validations = [
    body("tournamentId")
      .isUUID()
      .withMessage("Tournament ID must be a valid UUID")
      .notEmpty()
      .withMessage("Tournament ID is required"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];

  static async run(req, res) {
    try {
      const context = await getContext();
      const { tournamentId } = req.body;
      const groups = await context.sequelize.transaction(async (transaction) => {
        const groupList = [];
        const tournamentPlayers = await context.TournamentPlayer.findAll({
          where: { tournamentId },
          transaction,
        });

        let group_number = 1;
        let table = 1;
        let groupPlayers = [];

        for await (const player of tournamentPlayers) {
          groupPlayers.push(player);
          if (groupPlayers.length === 4) {
            // Create the group
            const newGroup = await context.Group.create(
              {
                group_number,
                table,
                tournamentId
              },
              { transaction }
            );

            // Create relations between Groups and Players
            const groupPlayerRelations = groupPlayers.map((tPlayer) => ({
              groupId: newGroup.id,
              playerId: tPlayer.playerId,
            }));

            await context.GroupPlayer.bulkCreate(groupPlayerRelations, {
              returning: ["groupId", "playerId"],
              transaction,
            });

            // Create matches between all players in the group
            const matches = [];
            for (let i = 0; i < groupPlayers.length; i++) {
              for (let j = i + 1; j < groupPlayers.length; j++) {
                const match = await context.Match.create(
                  {
                    playerAId: groupPlayers[i].playerId,
                    playerBId: groupPlayers[j].playerId,
                  },
                  { transaction }
                );
                matches.push(match);

                // Create relation between Group and Match
                await context.GroupMatch.create(
                  {
                    groupId: newGroup.id,
                    matchId: match.id,
                  },
                  { transaction }
                );
              }
            }

            groupList.push({
              ...newGroup.toJSON(),
              matches: matches,
            });
            
            group_number += 1;
            table += 1;
            groupPlayers = [];
          }
        }

        return groupList;
      });

      res.status(201).json(groups);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
