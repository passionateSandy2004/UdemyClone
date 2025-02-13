"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define a TypeScript interface for the course object
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

// Update the courses array to use the Course interface
const courses: Course[] = [
  {
    id: 1,
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "/course1.jpg",
    details: "Detailed information about Course 1.",
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is a brief description of Course 2.",
    image: "/course2.jpg",
    details: "Detailed information about Course 2.",
  },
  // Add more courses up to 10
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Specify the type of the course parameter
  const handlePreview = (course: Course) => {
    setSelectedCourse(course);
  };

  const closePreview = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="border p-4 rounded-lg shadow-lg">
              <Image
                src={course.image}
                alt={course.title}
                width={200}
                height={100}
                className="rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{course.title}</h2>
              <p className="text-sm">{course.description}</p>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handlePreview(course)}
                >
                  Preview
                </button>
                <Link href={`/course/${course.id}`} className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-bold">{selectedCourse.title}</h2>
            <p>{selectedCourse.details}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePreview}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
