"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon, FaBars, FaCaretDown } from "react-icons/fa";
import logo from "@/images/logo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  // Toggle dropdowns
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
          <div className="relative">
            <button
              onClick={() => toggleDropdown("courses")}
              className="flex items-center gap-1 hover:text-gray-400 transition"
            >
              আমাদের সব কোর্স
              <FaCaretDown />
            </button>
            {activeDropdown === "courses" && (
              <div className="absolute left-0 mt-2 flex flex-col  dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
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
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("account")}
              className="flex items-center gap-1 hover:text-gray-400 transition"
            >
              আমার অ্যাকাউন্ট
              <FaCaretDown />
            </button>
            {activeDropdown === "account" && (
              <div className="absolute left-0 mt-2 flex flex-col  dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
                <Link href="/profile">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    প্রোফাইল
                  </p>
                </Link>
                <Link href="/settings">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    কোর্সের বিস্তারিত
                  </p>
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("important")}
              className="flex items-center gap-1 hover:text-gray-400 transition"
            >
              জরুরী
              <FaCaretDown />
            </button>
            {activeDropdown === "important" && (
              <div className="absolute w-40 left-0 mt-2 flex flex-col  dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
                <Link href="/tarm">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    টার্মস এবং কন্ডিশনস
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    প্রাইভেসি পলিসি
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    রিফান্ড পলিসি
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    সাপোর্ট
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    প্রশ্নোত্তর
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    আমাদের সম্পর্কে
                  </p>
                </Link>
                <Link href="/course-flow">
                  <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                    যোগাযোগ
                  </p>
                </Link>
              </div>
            )}
          </div>
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
