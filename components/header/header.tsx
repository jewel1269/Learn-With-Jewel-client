"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import logo from "@/images/logo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <nav className="bg-gray-200  text-black  px-4 md:px-8 py-3 flex justify-between items-center">
      {/* Logo */}
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

      <div className={`w-full md:hidden sm:hidden block lg:flex lg:w-auto lg:items-center lg:gap-8`}>
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
              <div className="absolute left-0 mt-2 w-44 flex flex-col  dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
                <Link href="/course">
                  <p className="px-4 py-2  dark:hover:bg-gray-200">
                    কোর্সের বিস্তারিত
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
                <Link href="/userProfile">
                  <span className="px-4 py-2  dark:hover:bg-gray-200">
                    প্রোফাইল
                  </span>
                </Link>
                <Link href="/userProfile/cart">
                  <span className="px-4 py-2  dark:hover:bg-gray-200">
                    আমার কার্ট
                  </span>
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
                  <span className="px-4 py-2 dark:hover:bg-gray-200">
                    টার্মস এবং কন্ডিশনস
                  </span>
                </Link>
                <Link href="/refand">
                  <h1 className="px-4 py-2  dark:hover:bg-gray-200">
                    রিফান্ড পলিসি
                  </h1>
                </Link>
                <Link href="/support">
                  <h1 className="px-4 py-2  dark:hover:bg-gray-200">
                    সাপোর্ট
                  </h1>
                </Link>
                <Link href="/faq">
                  <h1 className="px-4 py-2 dark:hover:bg-gray-200">
                    প্রশ্নোত্তর
                  </h1>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="lg:hidden p-2   text-black rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
      >
        <FaBars className="w-6 h-6 text-white dark:text-black" />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 bg-gray-700 dark:bg-gray-300 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
          >
            <FaTimes className="w-6 h-6 text-white dark:text-black" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className="flex items-center gap-1 hover:text-gray-400 transition"
                >
                  আমাদের সব কোর্স
                  <FaCaretDown />
                </button>
                {activeDropdown === "courses" && (
                  <div className="absolute left-0 mt-2 w-44 flex flex-col  dark:bg-gray-100 dark:text-black text-sm rounded shadow-lg z-10">
                    <Link href="/course">
                      <p className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        কোর্সের বিস্তারিত
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li>
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
                    <Link href="/userProfile">
                      <span className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        প্রোফাইল
                      </span>
                    </Link>
                    <Link href="/userProfile/cart">
                      <span className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        আমার কার্ট
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li className="relative">
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
                      <span className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        টার্মস এবং কন্ডিশনস
                      </span>
                    </Link>
                    <Link href="/refand">
                      <h1 className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        রিফান্ড পলিসি
                      </h1>
                    </Link>
                    <Link href="/support">
                      <h1 className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        সাপোর্ট
                      </h1>
                    </Link>
                    <Link href="/faq">
                      <h1 className="px-4 py-2 hover:bg-[#1f2937] dark:hover:bg-gray-200">
                        প্রশ্নোত্তর
                      </h1>
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                href="/login"
                className="block hover:text-gray-600 dark:hover:text-gray-400"
              >
                লগইন
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section for Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="p-2 bg-gray-700 dark:bg-gray-300 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400">
          <FaMoon className="text-blue-400" />
        </button>
        <Link href="/login">
          <h1 className="px-3 py-1 border rounded-full hover:text-red-500 dark:hover:bg-blue-700 transition">
            লগইন
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
