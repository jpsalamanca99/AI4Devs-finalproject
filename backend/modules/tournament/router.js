import express from "express";
import { TournamentFinder } from "./handlers/TournamentFinder.js";
import { TournamentCreator } from "./handlers/TournamentCreator.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// GET all tournaments
router.get(
  "/",
  isAuthenticated,
  TournamentFinder.validations,
  TournamentFinder.run
);

// POST a new tournament
router.post(
  "/",
  isAuthenticated,
  TournamentCreator.validations,
  TournamentCreator.run
);

export default router;
