import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class TournamentCreator {
  static validations = [
    body("name")
      .isString()
      .withMessage("Name must be a string")
      .notEmpty()
      .withMessage("Name is required"),
    body("date")
      .isISO8601()
      .withMessage("Date must be a valid ISO 8601 date")
      .notEmpty()
      .withMessage("Date is required"),
    body("playerIds")
      .isArray()
      .withMessage("Player IDs must be an array")
      .notEmpty()
      .withMessage("Player IDs are required"),
    body("playerIds.*")
      .isString()
      .withMessage("Each Player ID must be a string"),
    body("nid")
      .isString()
      .withMessage("NID must be a string")
      .notEmpty()
      .withMessage("NID is required"),
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
      res.status(201).json(
        await context.sequelize.transaction(async (transaction) => {
          const { name, date, playerIds, nid } = req.body;

          // Find the Organizer by NID
          const organizer = await context.Organizer.findOne({ where: { nid }, transaction });
          if (!organizer) {
            return res.status(400).json({ error: "Organizer not found" });
          }

          // Create the Tournament record
          const newTournament = await context.Tournament.create(
            {
              name,
              date,
              organizerId: organizer.id,
            },
            { transaction }
          );

          // Create the relations between the Tournament and Players
          const tournamentPlayers = playerIds.map((playerId) => ({
            tournamentId: newTournament.id,
            playerId,
          }));

          await context.TournamentPlayer.bulkCreate(tournamentPlayers, {
            returning: ["tournamentId", "playerId"],
            transaction,
          });

          return newTournament;
        })
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
