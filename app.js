import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import Routes
import testRoutes from './routes/test.js';
import authRoutes from './routes/auth.js';
import clockRoutes from './routes/clock.js';
import shiftRoutes from './routes/shift.js';
import employeeShiftRoutes from './routes/employeeShift.js';
import requestRoutes from './routes/request.js';
import adminRequestRoutes from './routes/adminRequest.js';
import dashboardRoutes from './routes/dashboard.js';


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', testRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/clock', clockRoutes);
app.use('/api/shifts', shiftRoutes);
app.use('/api', employeeShiftRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/requests', adminRequestRoutes);
app.use('/api/dashboard', dashboardRoutes);



// Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
