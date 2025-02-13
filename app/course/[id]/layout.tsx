"use client";

import { ReactNode } from "react";
import { Course } from "../../../data/courses";

interface CourseLayoutProps {
  course: Course;
  children: ReactNode;
}

export default function CourseLayout({ course, children }: CourseLayoutProps) {
  if (!course) {
    return <p>Course data is unavailable.</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        {children}
      </div>
      <aside className="w-80 bg-white p-4 border-l border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modules</h2>
        {course.modules && course.modules.length > 0 ? (
          course.modules.map((module) => (
            <div key={module.id} className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">{module.title}</h3>
              <ul className="space-y-2">
                {module.videos.map((video) => (
                  <li key={video.id} className="flex items-center space-x-3">
                    <div className="w-16 h-9 bg-gray-300 rounded-md flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{video.title}</p>
                      <p className="text-xs text-gray-500">Video description or duration</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No modules available for this course yet.</p>
        )}
      </aside>
    </div>
  );
}