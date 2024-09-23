import express from 'express';
import { PlayerCreator } from './handlers/PlayerCreator.js';
import { PlayerFinder } from './handlers/PlayerFinder.js';

const router = express.Router();

// GET all players
router.get('/', PlayerFinder.validations, PlayerFinder.run);

// POST a new player
router.post('/', PlayerCreator.validations, PlayerCreator.run);

// GET a specific player
router.get('/:id', (req, res) => {
  res.status(200).json({ message: `GET player with id ${req.params.id}` });
});

// PUT (update) a specific player
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `UPDATE player with id ${req.params.id}`, data: req.body });
});

// DELETE a specific player
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

export default router;