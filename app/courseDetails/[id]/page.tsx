"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
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
    price: "$120",
    rating: 4.5,
    duration: "3 weeks",
    hoursPerWeek: "3-4 hours per week",
    level: "Intermediate",
    location: "Indonesia",
    learners: 146,
    date: "March 21, 2017",
    image: "/images/angular-course.jpg", // Add the image path
  },
  {
    id: 2,
    title: "CodeIgniter",
    category: "Backend Development",
    description:
      "Learn PHP CodeIgniter and understand working with MVC and HMVC from zero-to-hero.",
    status: "Done",
    teacher: "InsideCode ML",
    price: "$99",
    rating: 4.2,
    duration: "2 weeks",
    hoursPerWeek: "2-3 hours per week",
    level: "Beginner",
    location: "USA",
    learners: 95,
    date: "April 10, 2018",
    image: "/images/codeigniter-course.jpg", // Add the image path
  },
];

const CourseDetails = () => {
  const params = useParams();
  const id = params?.id;

  const course = courses.find((course) => course.id === parseInt(id || " ", 10));

  if (!course) {
    return <p className="text-center text-red-500 mt-6">Course not found.</p>;
  }

  return (
    <div className="min-h-screen text-black  py-10">
      <div className="max-w-7xl mx-auto text-black border border-black shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative">
          <Image
            fill
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4  p-2 rounded-lg shadow text-gray-800">
            <h1 className="text-sm font-medium">Rating: ⭐ {course.rating}</h1>
          </div>
        </div>

        {/* Course Title and Enroll Button */}
        <div className="p-6 text-blavk">
          <div className="flex justify-between text-white items-center">
            <div>
              <h1 className="text-2xl font-bold">{course.title}</h1>
              <h1 className="text-black text-sm">by {course.teacher}</h1>
            </div>
            <div className="text-right">
              <h1 className="text-red-500">{course.date}</h1>
              <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">About this course</h2>
            <h1 className="text-black mb-6">{course.description}</h1>
            <h3 className="text-lg font-semibold mb-2">What you will learn</h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Learn to produce initial sketches that capture the process of
                ideation
              </li>
              <li>
                Create user stories and storyboards to support the concept
              </li>
              <li>
                Develop interface wireframes to provide an engaging test example
              </li>
              <li>Use comparative analysis techniques</li>
              <li>Run a design walkthrough to test the concept</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3">
            <div className=" p-4 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span className="text-lg font-bold text-green-500">
                    {course.price}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Category:</span>
                  <span>{course.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span>{course.status}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{course.duration}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Hours/Week:</span>
                  <span>{course.hoursPerWeek}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Level:</span>
                  <span>{course.level}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{course.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Learners:</span>
                  <span>{course.learners}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
