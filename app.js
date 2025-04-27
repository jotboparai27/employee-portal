import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import Routes
import authRoutes from './routes/auth.js';
import clockRoutes from './routes/clock.js';
import shiftRoutes from './routes/shift.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/clock', clockRoutes);
app.use('/api/shifts', shiftRoutes);


// Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
