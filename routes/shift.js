import express from 'express';
import { assignShift, getShifts } from '../controllers/shiftController.js';
import protect from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = express.Router();

router.post('/', protect, adminOnly, assignShift);
router.get('/', protect, adminOnly, getShifts);

export default router;
