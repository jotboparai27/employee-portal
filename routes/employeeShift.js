import express from 'express';
import { getMyShifts } from '../controllers/employeeShiftController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.get('/my-shifts', protect, getMyShifts);

export default router;
