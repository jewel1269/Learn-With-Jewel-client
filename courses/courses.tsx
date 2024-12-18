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
  Ongoing: "bg-blue-100 text-blue-800",
  Done: "bg-green-100 text-green-800",
  Paused: "bg-red-100 text-red-800",
};

const CoursesGrid = () => {
  return (
    <div className="lg:px-16 bg-white">
      <main className="text-black min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        প্রিমিয়াম <span className="text-green-500">কোর্স</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <article
            key={course.id}
            className="shadow-xl shadow-zinc-500 h-96 border border-black bg-lime-800 rounded-xl p-6 flex flex-col justify-between transform transition duration-500 ease-in-out opacity-0 animate-fade-in hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${
                    statusColors[course.status]
                  }`}
                >
                  {course.status}
                </span>
              </div>
              <h1 className="text-sm mb-2 font-semibold">{course.category}</h1>
              <h1 className="text-sm mb-4">{course.description}</h1>
              <h1 className="text-xs text-gray-300">
                Instructor: {course.teacher}
              </h1>
            </div>
            <Link href={`/courseDetails/${course.id}`}>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition transform duration-300"
                aria-label={`${
                  course.status === "Done" ? "Claim reward" : "Continue course"
                } for ${course.title}`}
              >
                {course.status === "Done" ? "Claim Reward" : "Continue"}
              </button>
            </Link>
          </article>
        ))}
      </div>
    </main>
    </div>
  );
};

export default CoursesGrid;
