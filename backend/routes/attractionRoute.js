import express from "express";
import upload from "../middleware/multer.js";
import { addAttraction, getAllAttractions } from "../controllers/attractionController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addAttraction);
router.get('/', getAllAttractions)

export default router;