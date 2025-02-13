import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  // Await the auth function to get the userId
  const authData = await auth();

  // Redirect unauthenticated users to the sign-in page
  if (!authData.userId && !req.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Apply middleware to all routes inside the `app/` directory, including layouts and pages
    "/((?!_next|.*\\.(?:css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|otf|eot|mp4|webm|ogg|json|txt|xml|csv|docx?|xlsx?|zip)).*)",
    "/(api|trpc)(.*)", // Ensure middleware also applies to API routes
  ],
};
