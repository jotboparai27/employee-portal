import express from 'express';
import { clockIn, clockOut, getMyAnalytics} from '../controllers/clockController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/in', protect, clockIn);
router.patch('/out', protect, clockOut);
router.get('/my-summary', protect, getMyAnalytics);

export default router;
