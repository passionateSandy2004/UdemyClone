"use client";

import { ReactNode } from "react";

interface CourseLayoutProps {
  children: ReactNode;
}

export default function CourseLayout({ children }: CourseLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        {children} {/* Ensure this renders the page.tsx content */}
      </div>
    </div>
  );
}
