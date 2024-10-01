import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class GroupFinder {
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
      const groups = await context.Group.findAll({
        where: { tournamentId },
      });

      res.status(200).json(groups);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
