import express from 'express';
import { getAllRequests, approveRequest, rejectRequest } from '../controllers/adminRequestController.js';
import protect from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';

const router = express.Router();

router.get('/all', protect, adminOnly, getAllRequests);

router.patch('/:id/approve', protect, adminOnly, approveRequest);
router.patch('/:id/reject', protect, adminOnly, rejectRequest);
export default router;

