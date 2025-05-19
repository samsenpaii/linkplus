import { connectDB } from "@/app/db/db";
import Link from "@/app/db/models/link";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
  const { url } = await request.json();
  await connectDB();

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
      1. A concise title for the webpage.
      2. A short description (5-6 sentences) of what the webpage is about and what happens when the link is clicked.
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
    await Link.create({ url, title, description });

    return NextResponse.json({ success: true, title, description });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "Failed to process URL" }, { status: 500 });
  }
}