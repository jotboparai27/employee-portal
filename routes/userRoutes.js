import express from 'express';
import { getAllEmployees } from '../controllers/userController.js';
import protect from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
const router = express.Router();

// Get all employees
router.get('/employees', protect, adminOnly , getAllEmployees);

export default router;
