"use client";
import Link from "next/link";
import React, { useState } from "react";

const milestones = [
  {
    id: 1,
    title: "Welcome To The Web Course",
    videoUrl: "https://www.youtube.com/embed/p6L3_Q2swhM?si=Ghf-yAGuAl-4RNqH",
  },
  {
    id: 2,
    title: "Orientation - What Matters In This Course?",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  {
    id: 3,
    title: "HTML, CSS And Github As A Beginner",
    videoUrl: "https://www.example.com/video3.mp4",
  },
  {
    id: 4,
    title: "Responsive Web Layout",
    videoUrl: "https://www.example.com/video4.mp4",
  },
  {
    id: 5,
    title: "CSS Frameworks",
    videoUrl: "https://www.example.com/video5.mp4",
  },
];

const CourseLayout: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < milestones.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const selectedVideo = milestones[currentIndex];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col-reverse lg:px-10 md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-4 border-b md:border-b-0 md:border-r border-gray-700">
        <h2 className="text-lg font-bold mb-4">Running Module: 82</h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              onClick={() => handleVideoSelect(index)}
              className={`cursor-pointer p-3 rounded-md transition ${
                currentIndex === index
                  ? "bg-green-500"
                  : "bg-gray-200 hover:bg-gray-600"
              }`}
            >
              <div className="text-black font-medium">
                <span className="text-red-500 font-bold">{index + 1}.</span>{" "}
                {milestone.title}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <Link href="/course" className="text-purple-400 hover:text-purple-300">
            <span>&larr;</span> Back
          </Link>
          <h1 className="text-lg md:text-xl font-semibold text-center">
            {selectedVideo.title}
          </h1>
        </header>

        {/* Video Section */}
        <div className="bg-white h-[300px] md:h-[500px] rounded-lg flex items-center justify-center mb-6">
          {selectedVideo.videoUrl.includes("youtube.com") ? (
            <iframe
              src={selectedVideo.videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              controls
              className="w-full h-full rounded-lg"
              src={selectedVideo.videoUrl}
            />
          )}
        </div>

        {/* Video Header */}
        <div className="mb-4">
          <h1 className="text-xl text-green-500 font-semibold ">
            <span className="text-red-500 font-bold">{currentIndex + 1}. </span>
            {selectedVideo.title}
          </h1>
        </div>

        {/* Footer */}
        <footer className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded transition w-full md:w-auto ${
              currentIndex === 0
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-gray-600"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === milestones.length - 1}
            className={`px-4 py-2 rounded transition w-full md:w-auto ${
              currentIndex === milestones.length - 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            Next
          </button>
        </footer>
        {/* Copyright Warning */}
        <div className="bg-gray-300 p-4 mt-10 rounded-lg">
          <h2 className="text-lg text-red-500 font-bold">Copyright Warning</h2>
          <h1 className="text-gray-800 mt-2">
            All content in this course is protected by copyright law.
            Unauthorized distribution or reproduction is strictly prohibited.
          </h1>
        </div>
      </div>
    </main>
  );
};

export default CourseLayout;
