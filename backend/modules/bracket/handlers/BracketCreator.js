import { body, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class BracketCreator {
  static validations = [
    body("tournamentId")
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
      const { tournamentId } = req.body;

      const brackets = await context.sequelize.transaction(async (transaction) => {
        const bracketStructure = [
          { stage: "eighth", count: 8 },
          { stage: "fourth", count: 4 },
          { stage: "semi-final", count: 2 },
          { stage: "final", count: 1 },
        ];

        const createdBrackets = [];

        for (const { stage, count } of bracketStructure) {
          const stageBrackets = await Promise.all(
            Array.from({ length: count }, (_, index) =>
              context.Bracket.create(
                {
                  stage,
                  order: index + 1,
                  tournamentId,
                },
                { transaction }
              )
            )
          );
          createdBrackets.push(...stageBrackets);
        }

        return createdBrackets;
      });

      res.status(201).json(brackets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
