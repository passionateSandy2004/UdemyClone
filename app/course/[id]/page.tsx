"use client";

import { useParams } from "next/navigation";
import { courses } from "../../../data/courses";
import Image from "next/image";

export default function CoursePage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const courseId = id ? parseInt(id, 10) : null;
  const course = courseId !== null ? courses.find(c => c.id === courseId) : null;

  console.log("Params ID:", id);
  console.log("Parsed Course ID:", courseId);
  console.log("Course:", course);

  if (!course) {
    return <p className="text-black">Course not found.</p>;
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4 text-black">{course.title}</h1>
        <p className="text-gray-800 mb-8">{course.details}</p>

        {/* Video Player Section */}
        <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/video-placeholder.jpg"
            alt="Video Placeholder"
            width={800}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-4 text-white">
            <h2 className="text-2xl font-semibold">Video Title</h2>
            <p className="text-gray-300">This is a placeholder for the video description.</p>
          </div>
        </div>
      </div>

      {/* Sidebar Modules */}
      <aside className="w-80 bg-white p-4 border-l border-gray-200 shadow-lg mt-8">
        <h2 className="text-xl font-bold mb-4 text-black">Modules</h2>
        {course.modules && course.modules.length > 0 ? (
          course.modules.map((module) => (
            <div key={module.id} className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
              <ul className="space-y-2">
                {module.videos.map((video) => (
                  <li key={video.id} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
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
