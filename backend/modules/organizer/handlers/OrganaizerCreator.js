import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";
import bcrypt from "bcrypt";

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
    body("password")
      .isString()
      .withMessage("Password must be a string")
      .notEmpty()
      .withMessage("Password is required"),
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
      const { name, nid, password } = req.body;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      res.status(201).json(
        await context.sequelize.transaction(async (transaction) => {
          const newOrganizer = await context.Organizer.create(
            {
              name,
              nid,
              password: hashedPassword, // Store the hashed password
            },
            { transaction }
          );

          delete newOrganizer.password;

          return newOrganizer;
        })
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
