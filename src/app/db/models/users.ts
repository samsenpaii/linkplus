import mongoose, { Document, Model, Schema } from "mongoose";

interface Iuser extends Document{
    googleId: string;
    name: string;
    email: string;
    image?: string; 
    createdAt: Date;
    provider : string
}

const UserSchema = new Schema<Iuser>({
    googleId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    provider : {type:String , required: true}
});

const User: Model<Iuser> = mongoose.models.User || mongoose.model<Iuser>("User", UserSchema);
export default User;