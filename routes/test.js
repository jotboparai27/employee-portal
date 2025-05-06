import express from 'express';
import User from '../models/user.js';
const router = express.Router();

router.get('/seed', async (req, res) => {
  const user = await User.create({
    name: 'Test User',
    email: 'test2@email.com',
    password: '1234567',
    role: 'admin'
  });
  res.json(user);
});

router.get('/seed-employee', async (req, res) => {
  const user = await User.create({
    name: 'Test User',
    email: 'test@email.com',
    password: '12345678',
    role: 'employee'
  });
  res.json(user);
});

export default router;
