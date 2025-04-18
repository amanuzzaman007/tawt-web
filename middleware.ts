import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export { auth as middleware } from "@/auth";

const protectedRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const { pathname } = req.nextUrl;

  console.log({ session, pathname });

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
