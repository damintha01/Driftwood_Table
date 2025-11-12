import express from "express";
import { addFood, getAllFoods, getFoodById, updateFood, deleteFood } from "../controllers/foodController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";

const router = express.Router();

// Public routes
router.get("/", getAllFoods);
router.get("/:id", getFoodById);

// Protected routes (admin only)
router.post("/", verifyToken, isAdmin, upload.any(), addFood);
router.put("/:id", verifyToken, isAdmin, upload.any(), updateFood);
router.delete("/:id", verifyToken, isAdmin, deleteFood);

export default router;
