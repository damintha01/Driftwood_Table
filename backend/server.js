import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('MONGODB_URI is not set in environment. Set it in your .env or environment variables.');
} else {
    // Connect to MongoDB Atlas
    mongoose.connect(mongoUri)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        // Provide a clearer, actionable message for common Atlas issues
        console.error('MongoDB connection error:');
        console.error(err && err.message ? err.message : err);
        
    });
}



app.use("/api/auth", authRoutes);




// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});