import { connectDB } from "@/app/db/db";
import Link from "@/app/db/models/link";
import { auth } from "@/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  await connectDB();

  const userId = session?.user?.id?.toString();
  console.log("GET userId:", userId);

  if (!userId) {
    return NextResponse.json({ success: false, links: [] }, { status: 200 });
  }

  const links = await Link.find({ userId }).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, links });
}

export async function POST(request: Request) {
  const session = await auth();
  const { url } = await request.json();
  await connectDB();
  const userId = session?.user?.id;

  try {
    if (!url || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      throw new Error("GOOGLE_AI_API_KEY environment variable is not set");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Given the URL "${url}", provide:
      1. An accurate title for the webpage link.
      2. A short description (5-6 sentences) of what the webpage is about and what happens when the link is clicked.
      Format:
      Title: [Your title]
      Description: [Your description]
    `;

    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    const [titleLine, ...descLines] = responseText.split("\n").filter(Boolean);
    const title = titleLine.replace("Title: ", "").trim();
    const description = descLines.join(" ").replace("Description: ", "").trim();

    await Link.create({ url, title, description, userId });

    return NextResponse.json({ success: true, title, description });
  } catch (error) {
    if (error instanceof Error) {
      console.error("POST Error:", error.message);
    } else {
      console.error("POST Unknown error:", error);
    }

    return NextResponse.json({ error: "Failed to process URL" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  const { url } = await request.json();

  try {
    await connectDB();
    const userId = session?.user?.id?.toString();
    console.log("DELETE userId:", userId, "URL:", url);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!url || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const link = await Link.findOneAndDelete({ url, userId });

    if (!link) {
      return NextResponse.json(
        { error: "Link not found or not authorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Link deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("DELETE Error:", error.message);
    } else {
      console.error("DELETE Unknown error:", error);
    }

    return NextResponse.json({ error: "Failed to delete link" }, { status: 500 });
  }
}
