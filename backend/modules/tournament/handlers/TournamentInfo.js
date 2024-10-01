import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class TournamentInfo {
  static validations = [
    query("tournamentId")
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
      const { tournamentId } = req.query;

      console.log(tournamentId);
      // Fetch the tournament along with its related data
      const tournament = await context.Tournament.findOne({
        where: { id: tournamentId },
      });

      if (!tournament) {
        return res.status(404).json({ error: "Tournament not found" });
      }

      res.status(200).json(tournament);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
