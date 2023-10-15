import mongoose from "mongoose";

import "dotenv/config";

const mongoUrl = process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("connected successfully");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
