import express from 'express';
import { clockIn, clockOut } from '../controllers/clockController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/clock-in', protect, clockIn);
router.patch('/clock-out', protect, clockOut);

export default router;
