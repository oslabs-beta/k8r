import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// create a function that will connect to a MongoDB database
const connectDB = async (): Promise<void> => {
  try {
    // Create variable that will be used to establish a connection to the database
    // The MONGO_URI is defined in our .env file
    // const conn = await mongoose.connect(process.env.MONGO_URI);

    //for testing purpose only
    const URI: string = process.env.MONGO_URI_TEST;
    const conn = await mongoose.connect(URI);
    console.log('MongoDB connected');

    // Console log the local host if the connection is successful
    // console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline);
    // The error handler
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;