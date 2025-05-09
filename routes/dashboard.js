import express from 'express';
import { getDashboardSummary } from '../controllers/dashboardController.js';
import protect from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = express.Router();

router.get('/summary', protect, adminOnly, getDashboardSummary);

export default router;
