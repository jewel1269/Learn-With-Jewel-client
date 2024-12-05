// pages/index.tsx
import React from "react";

interface Course {
  title: string;
  category: string;
  instructor: string;
  status: "Ongoing" | "Done" | "Paused";
  description: string;
}

const course: Course[] = [
  {
    title: "AngularJS",
    category: "Frontend Development",
    instructor: "Brad Traversy",
    status: "Ongoing",
    description: "Master AngularJS from basics to advanced applications...",
  },
  {
    title: "CodeIgniter",
    category: "Backend Development",
    instructor: "InsideCode ML",
    status: "Done",
    description: "Learn PHP CodeIgniter with MVC from zero-to-hero...",
  },
  {
    title: "NodeJS",
    category: "Backend Development",
    instructor: "Anthony Alicea",
    status: "Paused",
    description: "Deep dive into Node.js, learn Express, and core concepts...",
  },
  {
    title: "ReactJS",
    category: "Frontend Development",
    instructor: "Debra Oliver",
    status: "Ongoing",
    description: "Dive into React 18, learn hooks, state management...",
  },
  {
    title: "Firebase",
    category: "Backend Development",
    instructor: "Sara Perkins",
    status: "Done",
    description: "Build full-stack apps with Angular & Firebase...",
  },
  // Add more courses as needed
];

const statusStyles: Record<Course["status"], string> = {
  Ongoing: "bg-blue-100 text-blue-700",
  Done: "bg-green-100 text-green-700",
  Paused: "bg-red-100 text-red-700",
};

const CourseCard: React.FC<Course> = ({
  title,
  category,
  instructor,
  status,
  description,
}) => (
  <div className="border rounded-lg shadow-lg p-4 bg-white">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span
        className={`px-3 py-1 text-sm rounded-full ${statusStyles[status]}`}
      >
        {status}
      </span>
    </div>
    <p className="text-sm text-gray-500">{category}</p>
    <p className="text-sm mt-2">{description}</p>
    <p className="text-xs text-gray-400 mt-1">Instructor: {instructor}</p>
    <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md">
      {status === "Done" ? "Claim Reward" : "Continue"}
    </button>
  </div>
);

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">
        My Courses for <span className="text-blue-500">All Courses</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
