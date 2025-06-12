import { connectDB } from "@/app/db/db";
import Link from "@/app/db/models/link";
import { auth } from "@/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


export async function GET() {
  const session = await auth();
  try {
    await connectDB();
    const userId = session?.user?.id?.toString();
    console.log("GET userId:", userId); // Debug log
    if (!userId) {
      return NextResponse.json({ success: false, links: [] }, { status: 200 });
    }
    const links = await Link.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, links });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 });
  }
}
export async function POST(request:Request) {
  const session = await auth();
  const { url } = await request.json();
  await connectDB();
  const userId = session?.user?.id;

  try {
    // Validate URL
    if (!url || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prompt for title and description
    const prompt = `
      Given the URL "${url}", provide:
      1. A accurate title for the webpage link.
      2. A short description (5-6 sentences) of what the webpage is about and what happens when the link is clicked. make it accurate. 
      Format the response as:
      Title: [Your title]
      Description: [Your description]
    `;

    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // Parse response
    const [titleLine, ...descLines] = responseText.split("\n").filter(Boolean);
    const title = titleLine.replace("Title: ", "").trim();
    const description = descLines.join(" ").replace("Description: ", "").trim();

    // Save to database
    await Link.create({ url, title, description , userId });

    return NextResponse.json({ success: true, title, description });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "Failed to process URL" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  const { url } = await request.json();
  try {
    await connectDB();
    const userId = session?.user?.id?.toString();
    console.log("DELETE userId:", userId, "URL:", url); // Debug log

    // Check if user is authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validate URL
    if (!url || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Find and delete the link, ensuring it belongs to the user
    const link = await Link.findOneAndDelete({ url, userId });

    if (!link) {
      return NextResponse.json(
        { error: "Link not found or not authorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Link deleted successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "Failed to delete link" }, { status: 500 });
  }
}