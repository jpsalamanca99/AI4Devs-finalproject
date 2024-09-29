import express from "express";
import { PlayerCreator } from "./handlers/PlayerCreator.js";
import { PlayerFinder } from "./handlers/PlayerFinder.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// GET all players
router.get("/", isAuthenticated, PlayerFinder.validations, PlayerFinder.run);

// POST a new player
router.post("/", isAuthenticated, PlayerCreator.validations, PlayerCreator.run);

export default router;
