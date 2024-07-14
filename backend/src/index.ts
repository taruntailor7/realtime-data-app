import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { pollData } from './services/pollData';
import priceRoutes from './routes/priceRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Hello FomoFactory!');
});

app.use('/api/prices', priceRoutes);

setInterval(pollData, 10000);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});