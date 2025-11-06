import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // add user info to request
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    // Check if role is in the decoded token (set by verifyToken)
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "Unauthorized. Please login again." });
    }
    
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
