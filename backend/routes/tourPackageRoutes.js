import express from "express";
import {
  createTourPackage,
  deleteTourPackage,
  getAllTourPackages,
  getTourPackageById,
  updateTourPackage,
} from "../controllers/tourPackageController.js";

const router = express.Router();

router.get("/", getAllTourPackages);
router.get("/:id", getTourPackageById);
router.post("/", createTourPackage);
router.put("/:id", updateTourPackage);
router.delete("/:id", deleteTourPackage);

export default router;
