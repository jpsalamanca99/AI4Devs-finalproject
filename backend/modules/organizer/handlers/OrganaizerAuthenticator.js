import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";
import bcrypt from "bcrypt"; // Assuming you are using bcrypt for password hashing

export class OrganizerAuthenticator {
  static validations = [
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
      const { nid, password } = req.body;

      const organizer = await context.Organizer.findOne({ where: { nid } });

      if (!organizer) {
        return res.status(404).json({ error: "Organizer not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, organizer.password);

      if (isPasswordValid) {
        res.status(200).json({ message: "Authentication successful" });
      } else {
        res.status(500).json({ error: "Invalid password" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
