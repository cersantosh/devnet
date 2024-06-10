import mongoose from "mongoose";
import "dotenv/config";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting to database", error);
  }
};

export default connectToDatabase;
