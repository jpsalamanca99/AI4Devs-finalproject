import express from "express";
import { BracketCreator } from "./handlers/BracketCreator.js";
import { BracketFinder } from "./handlers/BracketFinder.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// POST create brackets for a tournament
router.post("/", isAuthenticated, BracketCreator.validations, BracketCreator.run);

// GET brackets for a tournament
router.get("/", isAuthenticated, BracketFinder.validations, BracketFinder.run);

export default router;
