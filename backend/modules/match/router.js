import express from "express";
import { MatchFinder } from "./handlers/MatchFinder.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// GET matches for a group or bracket
router.get("/", isAuthenticated, MatchFinder.validations, MatchFinder.run);

export default router;
