import express from 'express'
import { getFavourites, getPlacesToVisit, getProfileData, handleFavourites, handleVisitLater } from '../controllers/userController.js';

const router = express.Router();

router.post('/favourites/:id', handleFavourites);
router.post('/visitLater/:id', handleVisitLater)
router.get('/profile-data', getProfileData)
router.get('/favourites', getFavourites)
router.get('/placesToVisit', getPlacesToVisit)

export default router;