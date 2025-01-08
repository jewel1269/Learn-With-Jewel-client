import React from "react";
import {
  FaBusinessTime,
  FaChalkboardTeacher,
  FaCode,
  FaDatabase,
  FaPaintBrush,
} from "react-icons/fa";

const TutorialsSection: React.FC = () => {
  const courses = [
    {
      title: "Coding Interview Preparation",
      subtitle: "Local + Remote Job",
      duration: "৯০ ঘন্টা",
      seats: "৩০ টি আসন",
      batch: "ব্যাচ নং: ৫",
      details: "বিস্তারিত দেখুন",
      image: "/path-to-image/coding-interview.jpg",
    },
    {
      title: "SQA: Manual & Automated Testing",
      subtitle: "",
      duration: "৮০ ঘন্টা",
      seats: "২৫ টি আসন",
      batch: "ব্যাচ নং: ৩",
      details: "বিস্তারিত দেখুন",
      image: "/path-to-image/sqa-testing.jpg",
    },
    {
      title: "WordPress Theme Development",
      subtitle: "",
      duration: "৯০ ঘন্টা",
      seats: "৪০ টি আসন",
      batch: "ব্যাচ নং: ৪",
      details: "বিস্তারিত দেখুন",
      image: "/path-to-image/wordpress.jpg",
    },
    {
      title: "Full Stack Web Development with ASP.Net Core",
      subtitle: "",
      duration: "১৪০ দিন",
      seats: "২০ টি আসন",
      batch: "ব্যাচ নং: ১",
      details: "বিস্তারিত দেখুন",
      image: "/path-to-image/aspnet-core.jpg",
    },
  ];
  const categories = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "Web & App Development",
      totalCourses: "২০",
    },
    {
      icon: <FaBusinessTime className="text-green-500" />,
      title: "Product Management & Design",
      totalCourses: "১৬",
    },
    {
      icon: <FaChalkboardTeacher className="text-yellow-500" />,
      title: "Business & Marketing",
      totalCourses: "৯",
    },
    {
      icon: <FaDatabase className="text-purple-500" />,
      title: "Data Engineering",
      totalCourses: "৬",
    },
    {
      icon: <FaPaintBrush className="text-pink-500" />,
      title: "Creatives",
      totalCourses: "৯",
    },
  ];

  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
            আপকামিং লাইভ কোর্স
          </h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  index === 0
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.icon}
                <div>
                <span>
                  {category.title}
                </span>
                <br />
                <span>
                👁️‍🗨️{category.totalCourses} কোর্স
                </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-36 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
                aria-label={course.title}
              ></div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-500">{course.subtitle}</p>
                <div className="text-sm text-gray-700 mt-2">
                  <p>সময়কাল: {course.duration}</p>
                  <p>আসন সংখ্যা: {course.seats}</p>
                  <p>{course.batch}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button className="text-blue-500 font-medium hover:underline">
                    {course.details}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            সব দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
