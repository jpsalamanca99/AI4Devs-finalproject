import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class TournamentFinder {
  static validations = [
    query("organizerNid")
      .isString()
      .withMessage("Organizer NID must be a valid string")
      .notEmpty()
      .withMessage("Organizer NID is required"),
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
      const nid = req.query.organizerNid;
      const tournaments = await context.sequelize.transaction(
        async (transaction) => {
          const allTournaments = await context.Tournament.findAll({
            where: { "$Organizer.nid$": nid },
            include: [{ model: context.Organizer, required: true }],
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
