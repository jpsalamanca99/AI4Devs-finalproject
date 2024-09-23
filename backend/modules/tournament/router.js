import express from "express";
import { TournamentFinder } from "./handlers/TournamentFinder.js";
import { TournamentCreator } from "./handlers/TournamentCreator.js";

const router = express.Router();

// GET all tournaments
router.get("/", TournamentFinder.validations, TournamentFinder.run);

// POST a new tournament
router.post("/", TournamentCreator.validations, TournamentCreator.run);

// GET a specific tournament
router.get("/:id", (req, res) => {
  res.status(200).json({ message: `GET tournament with id ${req.params.id}` });
});

// PUT (update) a specific tournament
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({
      message: `UPDATE tournament with id ${req.params.id}`,
      data: req.body,
    });
});

// DELETE a specific tournament
router.delete("/:id", (req, res) => {
  res.status(204).send();
});

export default router;
