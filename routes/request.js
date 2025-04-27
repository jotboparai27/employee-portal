import express from 'express';
import { submitRequest, getMyRequests } from '../controllers/requestController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, submitRequest);
router.get('/my', protect, getMyRequests);

export default router;
