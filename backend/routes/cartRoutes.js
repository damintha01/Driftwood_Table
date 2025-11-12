import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { addToCart, getCart, removeItem } from "../controllers/cartController.js";

const router = express.Router();

router.post("/", verifyToken, addToCart);
router.get("/", verifyToken, getCart);
router.delete("/:id", verifyToken, removeItem);

export default router;
