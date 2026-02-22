import express from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  try {
    res.status(200).json({
      message: "Image uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;