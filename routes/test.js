import express from 'express';
import User from '../models/user.js';
const router = express.Router();

router.get('/seed', async (req, res) => {
  const user = await User.create({
    name: 'Test User',
    email: 'test@email.com',
    passward: '123456',
    role: 'admin'
  });
  res.json(user);
});

export default router;
