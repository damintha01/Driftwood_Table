import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus
} from "../controllers/orderController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// User routes
router.post("/", verifyToken, createOrder);
router.get("/myorders", verifyToken, getUserOrders);

// Admin routes
router.get("/", isAdmin, getAllOrders);
router.put("/:id", isAdmin, updateOrderStatus);

export default router;
