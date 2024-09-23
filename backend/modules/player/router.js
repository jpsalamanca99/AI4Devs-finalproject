import express from 'express';

const router = express.Router();

// GET all players
router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET all players' });
});

// POST a new player
router.post('/', (req, res) => {
  res.status(201).json({ message: 'POST a new player', data: req.body });
});

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