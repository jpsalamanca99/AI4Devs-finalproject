import express from "express";
import { BracketFinder } from "./handlers/BracketFinder.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// GET brackets for a tournament
router.get("/", isAuthenticated, BracketFinder.validations, BracketFinder.run);

export default router;
