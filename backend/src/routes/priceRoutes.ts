import express from 'express';
import Price from '../models/Price';

const router = express.Router();

router.get('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

export default router;