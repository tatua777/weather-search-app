import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const { city } = req.query;

  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${city}&key=ed0012bb56b548b6afc94354230611`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
