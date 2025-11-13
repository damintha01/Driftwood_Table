import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus
} from "../controllers/orderController.js";
import { verifyToken, verifyTokenAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// User routes
router.post("/", verifyToken, createOrder);
router.get("/myorders", verifyToken, getUserOrders);

// Admin routes
router.get("/", verifyTokenAdmin, getAllOrders);
router.put("/:id", verifyTokenAdmin, updateOrderStatus);

export default router;
