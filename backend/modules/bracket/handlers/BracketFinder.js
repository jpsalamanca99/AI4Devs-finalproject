import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class BracketFinder {
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
      const tournamentId = req.query.tournamentId;
      const brackets = await context.Bracket.findAll({
        where: { tournamentId },
        order: [
          ['stage', 'ASC'],
          ['order', 'ASC']
        ],
      });

      res.status(200).json(brackets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
