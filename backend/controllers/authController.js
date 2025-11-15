import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Register User

export const registerUser = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Debug log
    
    const { username, email, password, role } = req.body;
    
    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ 
        message: "All fields are required",
        
      });
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user", // Default to "user" if not specified
    });

    res.json({ 
      message: "User registered successfully", 
      userId: newUser._id,
      role: newUser.role 
    });
  } catch (error) {
    console.error('Registration error:', error); // Debug log
    res.status(500).json({ message: error.message });
  }
};


//Login User

export const loginUser = async (req, res) => {
  try {
    console.log('Login request body:', req.body); // Debug log
    
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        message: "Email and password are required",

      });
    }
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined in environment variables');
      return res.status(500).json({ message: "Internal server error" });
    }

    // Generate JWT token with user role
    const token = jwt.sign(
      { userId: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1d" }
    );
    
    res.json({ 
      message: "Login successful", 
      token, 
      username: user.username,
      role: user.role 
    });
  } catch (error) {
    console.error('Login error:', error); // Debug log
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

