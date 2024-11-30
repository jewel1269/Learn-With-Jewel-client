"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import logo from "@/images/logo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDarkMode(isDark);
      if (isDark) document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-[#0d1117] text-white" : "bg-gray-100 text-black"
      } px-4 md:px-8 py-4 flex flex-wrap justify-around items-center`}
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-gray-700 dark:bg-gray-300 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
        >
          <FaBars className="w-6 h-6 text-white dark:text-black" />
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
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-blue-400" />
            )}
          </button>
          <Link href="/login">
            <p
              className={`${
                darkMode ? "bg-[#238636]" : "bg-blue-600"
              } px-3 py-1 rounded-full hover:bg-[#2ea043] dark:hover:bg-blue-700 transition`}
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
