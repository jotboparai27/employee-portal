import express from 'express';
import { getLogs } from '../controllers/logController.js';

const router = express.Router();

// Logs route
router.get('/', getLogs);

export default router;
