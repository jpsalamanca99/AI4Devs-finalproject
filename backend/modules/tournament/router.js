import express from 'express';

const router = express.Router();

// GET all tournaments
router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET all tournaments' });
});

// POST a new tournament
router.post('/', (req, res) => {
  res.status(201).json({ message: 'POST a new tournament', data: req.body });
});

// GET a specific tournament
router.get('/:id', (req, res) => {
  res.status(200).json({ message: `GET tournament with id ${req.params.id}` });
});

// PUT (update) a specific tournament
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `UPDATE tournament with id ${req.params.id}`, data: req.body });
});

// DELETE a specific tournament
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

export default router;
