import { auth } from "@/auth"; // Auth.js authentication
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth(); // Get user session


  console.log("middleware called")

  const protectedRoutes = ["/my"]; 
  

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !session?.user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/dashboard","/my"],
};
