"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const students = {
  1: {
    name: "santhosh",
    bio: "A passionate learner and aspiring software developer.",
    profileImage: "/profile1.jpg",
  },
  2: {
    name: "Jane Smith",
    bio: "A creative designer and front-end developer.",
    profileImage: "/profile2.jpg",
  },
  // Add more students as needed
};

export default function StudentProfile() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  // Check if id is defined and parse it
  const studentId = id ? parseInt(id, 10) : null;
  const student = studentId !== null ? students[studentId as keyof typeof students] : null;

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-md text-center">
        <Image
          src={student.profileImage}
          alt={`${student.name}'s profile picture`}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
        <p className="text-gray-700">{student.bio}</p>
      </div>
    </div>
  );
}
