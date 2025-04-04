import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname

  const isPublicPath = path === '/signin' || '/';

  const session = await auth()

  if(session?.user && isPublicPath){
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  if(!isPublicPath && !session?.user){
    return NextResponse.redirect(new URL('/signin', request.url))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile',
    '/signin',
  ]
}