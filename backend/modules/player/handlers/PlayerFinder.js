import { param, validationResult } from "express-validator";
import { getContext } from "../../../infra/db/context.js";

export class PlayerFinder {
  static validations = [
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
      const { id } = req.params;
      const player = await context.sequelize.transaction(
        async (transaction) => {
          const foundPlayer = await context.Player.findAll({ transaction });

          if (!foundPlayer) {
            return res.status(404).json({ error: 'Player not found' });
          }

          return foundPlayer;
        }
      );

      res.status(200).json(player);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
