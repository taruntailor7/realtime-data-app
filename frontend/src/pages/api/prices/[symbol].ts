import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// If local server running localhost will work 
const BACKEND_URL = 'http://localhost:5000/api/prices'; // Your backend API URL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol } = req.query;

  try {
    const response = await axios.get(`${BACKEND_URL}/${symbol}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}