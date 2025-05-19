
import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: String }, // Optional: Link to user
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Link || mongoose.model("Link", linkSchema);