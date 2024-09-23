import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class OrganizerCreator {
  static validations = [
    body("name")
      .isString()
      .withMessage("Name must be a string")
      .notEmpty()
      .withMessage("Name is required"),
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
          const { name, nid } = req.body;
          const newOrganizer = await context.Organizer.create(
            {
              name,
              nid,
            },
            { transaction }
          );

          return newOrganizer;
        })
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
