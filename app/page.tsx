"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { courses, Course } from "../data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handlePreview = (course: Course) => {
    setSelectedCourse(course);
  };

  const closePreview = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex gap-4">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => handlePreview(course)}
                  >
                    Preview
                  </button>
                  <Link href={`/course/${course.id}`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-bold text-gray-900">{selectedCourse.title}</h2>
            <p className="text-gray-700">{selectedCourse.details}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closePreview}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
