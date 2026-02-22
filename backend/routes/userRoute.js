import express from 'express'
import { toggleFavourite } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/toggle-favourite/:id', authMiddleware, toggleFavourite);

export default router;