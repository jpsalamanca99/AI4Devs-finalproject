import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class TournamentPlayers {
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

      // Fetch the tournament along with its associated players, returning only player id and name
      const tournament = await context.Tournament.findOne({
        where: { id: tournamentId },
        include: [{
          model: context.Player,
          through: { attributes: [] }, // Exclude the join table attributes
          attributes: ['id', 'name'], // Select only the id and name fields of players
        }],
      });

      if (!tournament || !tournament.Players.length) {
        return res.status(404).json({ error: "No players found for this tournament" });
      }

      res.status(200).json(tournament.Players);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}