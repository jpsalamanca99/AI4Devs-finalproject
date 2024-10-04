import express from "express";
import { GroupCreator } from "./handlers/GroupCreator.js";
import { GroupFinder } from "./handlers/GroupFinder.js";
import { GroupInfo } from "./handlers/GroupInfo.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// POST create groups for a tournament
router.post("/", isAuthenticated, GroupCreator.validations, GroupCreator.run);

// GET groups for a tournament
router.get("/", isAuthenticated, GroupFinder.validations, GroupFinder.run);

// GET groups for a tournament
router.get("/info", isAuthenticated, GroupInfo.validations, GroupInfo.run);

export default router;
