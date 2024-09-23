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
      const groups = await context.sequelize.transaction(
        async (transaction) => {
          // Creates the goups
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
              const newGroup = await context.Group.create(
                {
                  group_number,
                  table,
                  tournamentId
                },
                { transaction }
              );
              // Creates the relations between Groups and PlayersS
              const groupPlayerRelations = groupPlayers.map((tPlayer) => ({
                groupId: newGroup.id,
                playerId: tPlayer.playerId,
              }));

              await context.GroupPlayer.bulkCreate(groupPlayerRelations, {
                returning: ["groupId", "playerId"],
                transaction,
              });
              groupList.push(newGroup);
              group_number += 1;
              table += 1;
              groupPlayers = [];
            }
          }

          return groupList;
        }
      );

      res.status(201).json(groups);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
