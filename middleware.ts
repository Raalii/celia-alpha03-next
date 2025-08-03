// middleware.ts  (mise à jour)
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Laisser passer Next.js internals et l'API NextAuth
  if (
    pathname.startsWith("/_next") ||
    pathname === "/login" ||
    pathname === "/" ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // 2) Vérifie le JWT
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 3) Garde par rôle
  if (pathname.startsWith("/teacher") && token.role !== "TEACHER")
    return NextResponse.redirect(new URL("/", req.url));

  if (pathname.startsWith("/student") && token.role !== "STUDENT")
    return NextResponse.redirect(new URL("/", req.url));

  if (pathname.startsWith("/ecole") && token.role !== "ECOLE")
    return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
}

export const config = {
  // skip _next, login, api/auth/* explicitly
  matcher: ["/((?!_next|login|api/auth).*)"],
};
