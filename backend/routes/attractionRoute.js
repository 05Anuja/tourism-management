import express from "express";
import upload from "../middleware/multer.js";
import { addAttraction } from "../controllers/attractionController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addAttraction);

export default router;