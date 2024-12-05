import Link from "next/link";
import React from "react";

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
  {
    id: 3,
    title: "Laravel",
    category: "Backend Development",
    description:
      "Build a RESTful API for a market system using Laravel and dominate the challenging RESTful skills.",
    status: "Ongoing",
    teacher: "Jean D. McGon",
  },
  {
    id: 4,
    title: "NodeJS",
    category: "Backend Development",
    description:
      "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core JavaScript concepts, and more.",
    status: "Paused",
    teacher: "Anthony Alicea",
  },
  {
    id: 5,
    title: "Sketch",
    category: "UI/UX Design",
    description:
      "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z.",
    status: "Ongoing",
    teacher: "Joseph Angelo",
  },
  {
    id: 6,
    title: "Bootstrap",
    category: "Web Design",
    description:
      "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites.",
    status: "Done",
    teacher: "Janice Carroll",
  },
  {
    id: 7,
    title: "Firebase",
    category: "Backend Development",
    description:
      "Full-stack development with Angular & Firebase. Firebase Storage/Hosting, Firebase Cloud Functions.",
    status: "Done",
    teacher: "Sara Perkins",
  },
  {
    id: 8,
    title: "ReactJS",
    category: "Frontend Development",
    description:
      "Dive in and learn React 18 from scratch! Learn React Hooks, Redux, React Routing Animations, and more.",
    status: "Ongoing",
    teacher: "Debra Oliver",
  },
];

const statusColors: Record<string, string> = {
  Ongoing: "bg-blue-100 text-blue-700",
  Done: "bg-green-100 text-green-700",
  Paused: "bg-red-100 text-red-700",
};

const CoursesGrid = () => {
  return (
    <main className=" text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Our <span className="text-green-500">Courses</span>
      </h1>
      <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className=" shadow-md shadow-red-300  text-white rounded-xl p-5 border"
            role="article"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <span
                className={`text-sm px-2 text-red-500 py-1 rounded ${
                  statusColors[course.status]
                }`}
              >
                {course.status}
              </span>
            </div>
            <p className="text-white text-sm mb-2">{course.category}</p>
            <p className="text-white text-sm">{course.description}</p>
            <p className="mt-4 text-white text-xs">
              Instructor: {course.teacher}
            </p>
           <Link href={`/courseDetails/${course.id}`}>
           <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              aria-label={`${
                course.status === "Done" ? "Claim reward" : "Continue course"
              } for ${course.title}`}
            >
              {course.status === "Done" ? "Claim Reward" : "Continue"}
            </button>
           </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CoursesGrid;
