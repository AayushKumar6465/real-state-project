import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user_route.js';
import authRouter from './routes/auth_route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express(); // Initialize Express app
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser());// middleware to parse cookie

const mongoURI = process.env.MONGO_URI; // MongoDB connection string

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); // Connect to the database

// other routes here and setting the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/api/user', userRouter); // Create a Test API Route

app.use('/api/auth', authRouter); //Sign Up and Sign In Api Route

//Creating MiddleWare For Better Error Handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});