"use client";

import { useParams } from "next/navigation";
import { courses } from "../../../data/courses";
import CourseLayout from "./layout";
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
    return <p>Course not found.</p>;
  }

  return (
    <CourseLayout course={course}>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-8">{course.details}</p>
        
        {/* Video Player Section */}
        <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/video-placeholder.jpg" // Ensure this image is in your public directory
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

        {/* Additional course content can be added here */}
      </div>
    </CourseLayout>
  );
} 