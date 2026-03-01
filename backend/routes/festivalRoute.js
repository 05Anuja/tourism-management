import express from 'express'
import upload from '../middleware/multer.js'
import { addFestival, getAllFestivals } from '../controllers/festivalController.js';

const router = express.Router();

router.post('/add', upload.single('image'), addFestival);
router.get('/', getAllFestivals);

export default router;