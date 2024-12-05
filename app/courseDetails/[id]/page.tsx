"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// Mock data for demonstration. Replace with dynamic fetching if necessary.
const courses = [
  {
    id: 1,
    title: "AngularJS",
    category: "Frontend Development",
    description:
      "Master AngularJS from the basics to building an advanced application with Firebase’s Firestore as well.",
    status: "Ongoing",
    teacher: "Brad Traversy",
  },
  {
    id: 2,
    title: "CodeIgniter",
    category: "Backend Development",
    description:
      "Learn PHP CodeIgniter and understand working with MVC and HMVC from zero-to-hero.",
    status: "Done",
    teacher: "InsideCode ML",
  },
];

const CourseDetails = () => {
  const searchParams = useSearchParams(); 
  const id = searchParams.get("id"); 
  const router = useRouter();

  console.log(id);

  const course = courses.find((course) => course.id === parseInt(id || "", 10));

  if (!course) {
    return <p className="text-center text-red-500">Course not found.</p>;
  }

  return (
    <main className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-sm text-gray-600 mb-2">
          Category: {course.category}
        </p>
        <p className="text-lg text-gray-700 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Instructor: {course.teacher}
        </p>
        <span
          className={`inline-block px-3 py-1 text-sm rounded ${
            course.status === "Ongoing"
              ? "bg-blue-100 text-blue-700"
              : course.status === "Done"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {course.status}
        </span>
        <button
          className="block mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => router.push("/")} // Using Next.js navigation for route switching
        >
          Back to Courses
        </button>
      </div>
    </main>
  );
};

export default CourseDetails;
