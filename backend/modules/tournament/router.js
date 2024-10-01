import express from "express";
import { TournamentFinder } from "./handlers/TournamentFinder.js";
import { TournamentCreator } from "./handlers/TournamentCreator.js";
import { TournamentInfo } from "./handlers/TournamentInfo.js"; // Import the new class
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

// GET tournament info
router.get(
  "/info",
  isAuthenticated,
  TournamentInfo.validations,
  TournamentInfo.run
);

export default router;
