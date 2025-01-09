"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "@/images/jewel-removebg-preview.png";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full lg:sticky top-0 left-0 z-50 transition-all duration-700  ${
        isScrolled ? "shadow-md" : "bg-transparent"
      }`}
    >
      <div className="lg:px-10">
        <nav className=" border bg-white lg:rounded-2xl rounded-xl shadow shadow-gray-400 text-black lg:px-44 sm:px-4 md:px-8  flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={logo}
                  alt="Learn with Jewel Logo"
                  className="h-16 w-16"
                  width={400}
                  height={400}
                />

                <span className="font-semibold text-sm md:text-base">
                  Learn <br />
                  <span>with Jewel</span>
                </span>
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border rounded-3xl lg:w-60 w-32 px-4 lg:py-1 bg-gray-100 shadow-sm">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm-6-6h12m0 0l-4 4m4-4l-4-4"
              />
            </svg>

            {/* Input Field */}
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full ml-2 text-gray-700 placeholder-text-sm placeholder-gray-800"
              placeholder="কোর্স সার্চ করুন"
            />
          </div>

          <div className="hidden lg:flex lg:w-auto lg:items-center lg:gap-8">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className="flex text-sm font-bold items-center gap-1 hover:text-gray-400 transition"
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
                  className="flex text-sm font-bold items-center gap-1 hover:text-gray-400 transition"
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
                  className="flex text-sm font-bold items-center gap-1 hover:text-gray-400 transition"
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
              <div className="">
                <Link href={"/jewel"}>
                <h1 className="text-sm font-bold">প্রতিষ্ঠাতা</h1>
                </Link>
              </div>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2   text-black rounded-full bg-black hover:bg-gray-600 dark:hover:bg-gray-400"
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
                    className="block  hover:text-gray-600 dark:hover:text-gray-400"
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
              <h1 className="px-3 py-1 bg-[#FFD700] border border-gray-400  rounded-full hover:text-red-500 hover:font-bold transition">
                লগইন
              </h1>
            </Link>
          </div>
        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
