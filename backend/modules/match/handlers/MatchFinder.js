import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class MatchFinder {
  static validations = [
    query("groupId")
      .optional()
      .isUUID()
      .withMessage("Group ID must be a valid UUID"),
    query("bracketId")
      .optional()
      .isUUID()
      .withMessage("Bracket ID must be a valid UUID"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Ensure at least one ID is provided
      if (!req.query.groupId && !req.query.bracketId) {
        return res.status(400).json({
          errors: [{ msg: "Either groupId or bracketId must be provided" }],
        });
      }
      // Ensure not both IDs are provided
      if (req.query.groupId && req.query.bracketId) {
        return res.status(400).json({
          errors: [{ msg: "Cannot provide both groupId and bracketId" }],
        });
      }
      next();
    },
  ];

  static async run(req, res) {
    try {
      const context = await getContext();
      const { groupId, bracketId } = req.query;

      let matches;
      if (groupId) {
        // Find matches for a group
        matches = await context.Match.findAll({
          include: [
            {
              model: context.Group,
              where: { id: groupId },
              through: { model: context.GroupMatch },
            },
            {
              model: context.Player,
              as: 'PlayerA',
              attributes: ['id', 'name'],
            },
            {
              model: context.Player,
              as: 'PlayerB',
              attributes: ['id', 'name'],
            },
          ],
        });
      } else {
        // Find match for a bracket (should be only one due to unique constraint)
        matches = await context.Match.findOne({
          include: [
            {
              model: context.Bracket,
              where: { id: bracketId },
              through: { model: context.BracketMatch },
            },
            {
              model: context.Player,
              as: 'PlayerA',
              attributes: ['id', 'name'],
            },
            {
              model: context.Player,
              as: 'PlayerB',
              attributes: ['id', 'name'],
            },
          ],
        });
      }

      if (!matches) {
        return res.status(404).json({ 
          error: `No matches found for ${groupId ? 'group' : 'bracket'} ID: ${groupId || bracketId}` 
        });
      }

      res.status(200).json(matches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
