import { CreateOrganizer } from "./commands/CreateOrganizer.js";
import { OrganizerCreator } from "./useCases/OrganizerCreator.js";

import express from "express";

const router = express.Router();

// GET all organizers
router.get("/", (req, res) => {
  res.status(200).json({ message: "GET all organizers" });
});

// POST a new organizer
router.post("/", (req, res) => {
  const cmd = new CreateOrganizer(req);
  const handler = new OrganizerCreator();
  return handler.run(cmd);
});

// GET a specific organizer
router.get("/:id", (req, res) => {
  res.status(200).json({ message: `GET organizer with id ${req.params.id}` });
});

// PUT (update) a specific organizer
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({
      message: `UPDATE organizer with id ${req.params.id}`,
      data: req.body,
    });
});

// DELETE a specific organizer
router.delete("/:id", (req, res) => {
  res.status(204).send();
});

export default router;
