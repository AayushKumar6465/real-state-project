import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user_route.js';
import authRouter from './routes/auth_route.js';
import listingRouter from './routes/listing_route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express(); 
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());

const mongoURI = process.env.MONGO_URI; 

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); 
  }
};

connectDB(); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/api/user', userRouter); 

app.use('/api/auth', authRouter); 

app.use('/api/listing', listingRouter); 

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