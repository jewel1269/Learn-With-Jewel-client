"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaSun, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "@/images/jewel-removebg-preview.png";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`w-full lg:sticky top-0 left-0 z-50 transition-all duration-700 ${
        isScrolled ? "shadow-md bg-white dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="lg:px-10">
        <nav className="border bg-white dark:bg-gray-800 lg:rounded-2xl rounded-xl shadow text-black dark:text-white lg:px-44 sm:px-4 md:px-8 flex justify-between items-center">
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
          <div className="hidden lg:flex items-center border rounded-3xl lg:w-60 px-4 lg:py-1 bg-gray-100 dark:bg-gray-700 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 dark:text-gray-300"
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
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full ml-2 text-gray-700 dark:text-white placeholder:text-gray-800 dark:placeholder:text-gray-400"
              placeholder="কোর্স সার্চ করুন"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Dropdown
              label="আমাদের সব কোর্স"
              links={[{ href: "/routes/course", text: "কোর্সের বিস্তারিত" }]}
            />
            <Dropdown
              label="আমার অ্যাকাউন্ট"
              links={[
                { href: "/routes/userProfile", text: "প্রোফাইল" },
                { href: "/routes/userProfile/cart", text: "আমার কার্ট" },
              ]}
            />
            <Dropdown
              label="জরুরী"
              links={[
                { href: "/routes/tarm", text: "টার্মস এবং কন্ডিশনস" },
                { href: "/routes/refand", text: "রিফান্ড পলিসি" },
                { href: "/routes/support", text: "সাপোর্ট" },
                { href: "/routes/faq", text: "প্রশ্নোত্তর" },
              ]}
            />
            <Link href="/routes/jewel" className="text-sm font-bold">
              প্রতিষ্ঠাতা
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-105 transition"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-500" />
              )}
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              লগইন
            </Link>
          </div>

          

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2   rounded-full  dark:bg-gray-900"
          >
         
            <FaBars className="h-8 w-8" />
          </button>
          

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } w-64`}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 bg-gray-700 dark:bg-gray-600 rounded-full"
              >
                <FaTimes className="text-white" />
              </button>
            </div>
            <ul className="p-4 space-y-4">
              <MobileDropdown
                label="আমাদের সব কোর্স"
                links={[{ href: "/routes/course", text: "কোর্সের বিস্তারিত" }]}
              />
              <MobileDropdown
                label="আমার অ্যাকাউন্ট"
                links={[
                  { href: "/routes/userProfile", text: "প্রোফাইল" },
                  { href: "/routes/userProfile/cart", text: "আমার কার্ট" },
                ]}
              />
              <MobileDropdown
                label="জরুরী"
                links={[
                  { href: "/routes/tarm", text: "টার্মস এবং কন্ডিশনস" },
                  { href: "/routes/refand", text: "রিফান্ড পলিসি" },
                  { href: "/routes/support", text: "সাপোর্ট" },
                  { href: "/routes/faq", text: "প্রশ্নোত্তর" },
                ]}
              />
              <li className="text-center">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-105 transition"
                >
                  {isDarkMode ? (
                    <FaSun className="text-yellow-400" />
                  ) : (
                    <FaMoon className="text-blue-500" />
                  )}
                </button>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block text-center bg-blue-600 text-white py-2 rounded shadow-md"
                >
                  লগইন
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// Dropdown Component
const Dropdown: React.FC<{
  label: string;
  links: { href: string; text: string }[];
}> = ({ label, links }) => (
  <div className="relative group">
    <button className="flex text-sm font-bold items-center gap-1 hover:text-gray-400 transition">
      {label}
      <FaCaretDown />
    </button>
    <div className="absolute left-0 mt-2 w-44 flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      {links.map(({ href, text }) => (
        <Link
          href={href}
          key={href}
          className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {text}
        </Link>
      ))}
    </div>
  </div>
);

// MobileDropdown Component
const MobileDropdown: React.FC<{
  label: string;
  links: { href: string; text: string }[];
}> = ({ label, links }) => (
  <li>
    <div className="relative">
      <button className="flex items-center gap-1 hover:text-gray-400 transition">
        {label}
        <FaCaretDown />
      </button>
      <div className="absolute left-0 mt-2 flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white text-sm rounded shadow-lg z-10">
        {links.map(({ href, text }) => (
          <Link
            href={href}
            key={href}
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  </li>
);
