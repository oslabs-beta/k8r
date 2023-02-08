import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// create a function that will connect to a MongoDB database
const connectDB = async (): Promise<void> => {
  try {
    const URI = process.env.MONGO_URL as string;
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;