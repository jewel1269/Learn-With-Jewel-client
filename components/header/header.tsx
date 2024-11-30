"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-[#0d1117] text-white" : "bg-gray-100 text-black"
      } px-4 md:px-8 py-4 flex flex-wrap justify-between items-center`}
    >
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image
              src={logo}
              alt="Learn with Jewel Logo"
              className="h-12 w-20"
              width={350}
              height={350}
            />
            <span className="font-semibold text-sm md:text-base">
              Learn <br />
              <span>with Jewel</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 bg-gray-700 dark:bg-gray-300 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white dark:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6h15M4.5 12h15m-15 6h15"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center lg:gap-8`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
          <Link href="/">
            <p className="hover:text-gray-400 transition cursor-pointer">হোম</p>
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-gray-400 transition">
              রিয়াক্ট এক্সপ্লোরার
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75l3.75 3.75 3.75-3.75"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-[#161b22] dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
              <Link href="/course-details">
                <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                  কোর্সের বিস্তারিত
                </p>
              </Link>
              <Link href="/course-flow">
                <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                  কোর্স ফ্লো দেখুন
                </p>
              </Link>
              <Link href="/projects">
                <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                  প্রজেক্টস
                </p>
              </Link>
            </div>
          </div>
          <Link href="/blog">
            <p className="hover:text-gray-400 transition cursor-pointer">
              ব্লগ ইন এ রিঅ্যাক্ট থ্রো
            </p>
          </Link>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-700 dark:bg-gray-300 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5m0 14V21m9-9h-1.5M4.5 12H3m15.364-6.364l-1.061 1.061M6.697 17.303l-1.061 1.061M18.364 18.364l-1.061-1.061M6.697 6.697l-1.061-1.061"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0012.002 3.75c-4.937 0-9 3.552-9 8.25s4.063 8.25 9 8.25a9.72 9.72 0 007.125-2.998c-.399.327-.875.56-1.375.682a6.463 6.463 0 01-4.75 1.066 6.495 6.495 0 01-5.35-7.599c.15-.54.225-1.125.225-1.701 0-1.071-.291-2.064-.805-2.902a6.468 6.468 0 0112.172 5.704c.066.428.1.875.1 1.326 0 1.14-.223 2.257-.654 3.286z"
                />
              </svg>
            )}
          </button>
          <Link href="/login">
            <p
              className={`${
                darkMode ? "bg-[#238636]" : "bg-blue-600"
              } px-4 py-2 rounded hover:bg-[#2ea043] dark:hover:bg-blue-700 transition`}
            >
              লগইন
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
