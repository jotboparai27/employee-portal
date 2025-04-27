import express from 'express';
import { assignShift, getShifts, updateShift, deleteShift } from '../controllers/shiftController.js';
import protect from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = express.Router();

// Admin routes
router.post('/', protect, adminOnly, assignShift);
router.get('/', protect, adminOnly, getShifts);
router.patch('/:id', protect, adminOnly, updateShift);
router.delete('/:id', protect, adminOnly, deleteShift);

export default router;
