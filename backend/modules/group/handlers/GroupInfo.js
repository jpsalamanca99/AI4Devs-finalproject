import { query, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class GroupInfo {
  static validations = [
    query("groupId")
      .isUUID()
      .withMessage("Group ID must be a valid UUID")
      .notEmpty()
      .withMessage("Group ID is required"),
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
      const { groupId } = req.query;

      const group = await context.Group.findOne({
        where: { id: groupId },
        include: [
          {
            model: context.Player,
            through: { attributes: [] },
            order: [['id', 'ASC']],
          },
        ],
      });

      if (!group) {
        return res.status(404).json({ error: "Group not found" });
      }

      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
