// src/app/db/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// ✅ Use a safely typed global object
const globalForMongo = globalThis as unknown as {
  mongooseConn?: Promise<typeof mongoose>;
};

let cached = globalForMongo.mongooseConn;

if (!cached) {
  cached = globalForMongo.mongooseConn = mongoose.connect(MONGODB_URI, {
    dbName: "LinkPlus",
    bufferCommands: false,
  });
}

export const connectDB = async () => cached;
