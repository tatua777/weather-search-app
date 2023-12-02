import express from 'express';
import db from './db'; // Set up your PostgreSQL database connection

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const history = await db.any('SELECT * FROM history ORDER BY timestamp DESC LIMIT 10');
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
});

export default router;
