import { NextResponse, NextRequest } from "next/server";

const publicPaths = ["/"];

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|icons|img|favicon.ico|/).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("authToken")?.value;

  if (!token && pathname !== '/login') {
    if (publicPaths.some((prefix) => pathname.startsWith(prefix))) {
      return NextResponse.redirect(`${req.nextUrl.origin}/login`);
    }
  } else if(token && pathname === '/') {
    return NextResponse.redirect(`${req.nextUrl.origin}/dashboard/`);
  }
  return NextResponse.next()
}