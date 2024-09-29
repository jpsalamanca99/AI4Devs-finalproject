import express from "express";
import { OrganizerAuthenticator } from "./handlers/OrganaizerAuthenticator.js";
import { OrganizerCreator } from "./handlers/OrganaizerCreator.js";
import { OrganizerLogout } from "./handlers/OrganizerLogout.js";
import isAuthenticated from "../../infra/middleware/authentication.js";

const router = express.Router();

// POST a new organizer
router.post("/", OrganizerCreator.validations, OrganizerCreator.run);

// POST authenticates an organizer
router.post(
  "/authenticate",
  OrganizerAuthenticator.validations,
  OrganizerAuthenticator.run
);

// POST logs out an organizer
router.post(
  "/logout",
  isAuthenticated,
  OrganizerLogout.validations,
  OrganizerLogout.run
);

export default router;
