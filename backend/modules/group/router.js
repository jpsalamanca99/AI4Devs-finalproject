import express from 'express';
import { GroupCreator } from './handlers/GroupCreator.js';

const router = express.Router();

// POST create groups for a tournament
router.post('/', GroupCreator.validations, GroupCreator.run);

// GET all groups (if needed in the future)
// router.get('/', GroupFinder.validations, GroupFinder.run);

// GET a specific group (if needed in the future)
// router.get('/:id', (req, res) => {
//   res.status(200).json({ message: `GET group with id ${req.params.id}` });
// });

// PUT (update) a specific group (if needed in the future)
// router.put('/:id', (req, res) => {
//   res.status(200).json({ message: `UPDATE group with id ${req.params.id}`, data: req.body });
// });

// DELETE a specific group (if needed in the future)
// router.delete('/:id', (req, res) => {
//   res.status(204).send();
// });

export default router;
