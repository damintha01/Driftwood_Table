import express from "express";
import { addFood, getAllFoods, getFoodById, updateFood, deleteFood } from "../controllers/foodController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllFoods);
router.get("/:id", getFoodById);

// Protected routes (admin only)
router.post("/", verifyToken, isAdmin, addFood);
router.put("/:id", verifyToken, isAdmin, updateFood);
router.delete("/:id", verifyToken, isAdmin, deleteFood);

export default router;
