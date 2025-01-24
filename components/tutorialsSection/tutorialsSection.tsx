import Link from "next/link";
import React from "react";
import { FaCode, FaJsSquare, FaNode, FaReact, FaVideo } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const TutorialsSection: React.FC = () => {
  const courses = [
    {
      title: "C Programming Basics",
      subtitle: "Learn the fundamentals of C programming",
      duration: "৬০ ঘন্টা",
      seats: "২০টি",
      batch: "ব্যাচ নং: ১",
      details: "দেখুন",
      image: "/path-to-image/c-programming.jpg",
      category: "C Programming",
    },
    {
      title: "C++ Object-Oriented Programming",
      subtitle: "Master OOP concepts with C++",
      duration: "৭০ ঘন্টা",
      seats: "২৫টি",
      batch: "ব্যাচ নং: ২",
      details: "দেখুন",
      image: "/path-to-image/cplusplus.jpg",
      category: "C++",
    },
    {
      title: "JavaScript for Web Development",
      subtitle: "Introduction to JavaScript for building dynamic websites",
      duration: "৮০ ঘন্টা",
      seats: "৩০টি",
      batch: "ব্যাচ নং: ৩",
      details: "দেখুন",
      image: "/path-to-image/javascript.jpg",
      category: "JavaScript",
    },
    {
      title: "React Development Fundamentals",
      subtitle: "Learn how to build modern web applications using React",
      duration: "৯০ ঘন্টা",
      seats: "১৫টি",
      batch: "ব্যাচ নং: ৪",
      details: "দেখুন",
      image: "/path-to-image/react.jpg",
      category: "React",
    },
    {
      title: "Node.js Backend Development",
      subtitle: "Building scalable server-side applications with Node.js",
      duration: "১০০ ঘন্টা",
      seats: "১৮টি",
      batch: "ব্যাচ নং: ৫",
      details: "দেখুন",
      image: "/path-to-image/nodejs.jpg",
      category: "Node.js",
    },
    {
      title: "Next.js for Server-Side Rendering",
      subtitle: "Master the SSR approach with Next.js",
      duration: "৭০ ঘন্টা",
      seats: "২০টি",
      batch: "ব্যাচ নং: ৬",
      details: "দেখুন",
      image: "/path-to-image/nextjs.jpg",
      category: "Next.js",
    },
    {
      title: "Express.js API Development",
      subtitle: "Learn to build RESTful APIs with Express.js",
      duration: "৮০ ঘন্টা",
      seats: "২২টি",
      batch: "ব্যাচ নং: ৭",
      details: "দেখুন",
      image: "/path-to-image/expressjs.jpg",
      category: "Express.js",
    },
  ];

  const categories = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "C Programming",
      totalCourses: "১",
    },
    {
      icon: <FaCode className="text-indigo-500" />,
      title: "C++",
      totalCourses: "১০",
    },
    {
      icon: <FaJsSquare className="text-yellow-500" />,
      title: "JavaScript",
      totalCourses: "১৫",
    },
    {
      icon: <FaCode className="text-blue-400" />,
      title: "TypeScript",
      totalCourses: "১২",
    },
    {
      icon: <FaReact className="text-cyan-500" />,
      title: "React",
      totalCourses: "১৪",
    },
    {
      icon: <FaCode className="text-teal-500" />,
      title: "Next.js",
      totalCourses: "৭",
    },
    {
      icon: <FaCode className="text-gray-600" />,
      title: "Express.js",
      totalCourses: "৬",
    },
    {
      icon: <FaNode className="text-green-600" />,
      title: "Node.js",
      totalCourses: "৯",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl text-center flex items-center gap-2 font-bold text-gray-800 mb-4">
              <span className="loading loading-infinity text-red-500 loading-lg"></span>{" "}
              আপকামিং লাইভ কোর্স
            </h2>
          </div>
          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md flex-shrink-0 ${
                  index === 0
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.icon}
                <div>
                  <span>{category.title}</span>
                  <br />
                  <span>👁️‍🗨️{category.totalCourses} কোর্স</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md border rounded-lg overflow-hidden hover:shadow-xl hover:border hover:border-gray-400 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              {/* Image */}
              <div
                className="relative lg:h-36 h-20 bg-cover bg-center group"
                style={{ backgroundImage: `url(${course.image})` }}
                aria-label={course.title}
              >
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="lg:text-lg text-sm font-semibold">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500">{course.subtitle}</p>
                <div className="lg:text-sm text-xs text-gray-700 mt-2">
                  <p>সময়কাল: {course.duration}</p>
                  <p>আসন সংখ্যা: {course.seats}</p>
                  <p>{course.batch}</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button className="flex items-center w-full justify-center gap-2 text-black lg:text-lg border border-gray-300 bg-slate-100 text-xs text-center font-medium px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200">
                    <FaVideo className="text-lg" />
                    {course.details}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8 flex justify-center text-center">
          <Link href={"/routes/course"}>
            <button className="px-6 flex justify-center gap-2 items-center py-2 bg-transparent transition duration-200 border rounded-xl text-black  hover:bg-yellow-400">
              সব দেখুন <FaArrowTrendUp />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
