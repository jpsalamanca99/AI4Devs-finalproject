import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class TournamentFinder {
  static validations = [
    query('organizer')
      .isUUID()
      .withMessage('Organizer must be a valid UUID')
      .notEmpty()
      .withMessage('Organizer is required'),
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
      const { organizer } = req.query;
      const tournaments = await context.sequelize.transaction(
        async (transaction) => {
          const allTournaments = await context.Tournament.findAll({
            where: { organizerId: organizer },
            transaction,
          });

          return allTournaments;
        }
      );

      res.status(200).json(tournaments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
