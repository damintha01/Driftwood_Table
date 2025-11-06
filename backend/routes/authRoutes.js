import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

router.get("/profile",verifyToken, (req, res) => {
  res.json({ message: "This is a protected profile route", user: req.user });
});
export default router;