import { connectDB } from "@/app/db/db";
import User from "@/app/db/models/users";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { googleId, name, email, image, provider } = await request.json();
  await connectDB();

  const existingUser = await User.findOne({ googleId });

  if (!existingUser) {
    await User.create({ googleId, name, email, image, provider });
  }

  return NextResponse.json({ success: true });
}
