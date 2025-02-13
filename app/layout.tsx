import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "An interactive learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SignedOut>
            {/* Show Sign-In Button for Unauthenticated Users */}
            <div className="min-h-screen flex items-center justify-center">
              <SignInButton mode="modal" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" />
            </div>
          </SignedOut>

          <SignedIn>
            {/* Full Layout for Authenticated Users */}
            <div className="flex min-h-screen">
              {/* Navigation Sidebar */}
              <nav className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 p-6 text-white shadow-lg">
                <div className="mb-8 flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Learning Hub</h1>
                  <UserButton />
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/20 group"
                    >
                      <FaHome className="w-5 h-5 mr-3 text-blue-200 group-hover:text-white" />
                      <span className="font-medium">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore"
                      className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/20 group"
                    >
                      <MdExplore className="w-5 h-5 mr-3 text-blue-200 group-hover:text-white" />
                      <span className="font-medium">Explore Courses</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Main Content */}
              <main className="flex-1 p-6 bg-gray-50">{children}</main>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
