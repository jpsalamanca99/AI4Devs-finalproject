import express from "express";
import { GroupCreator } from "./handlers/GroupCreator.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// POST create groups for a tournament
router.post("/", isAuthenticated, GroupCreator.validations, GroupCreator.run);

export default router;
