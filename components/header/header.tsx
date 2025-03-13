"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";


const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full sticky top-0 left-0 z-50 transition-all  duration-700 ${
        isScrolled ? "shadow-md  dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className=" ">
        <nav className="border bg-white shadow-gray-300 dark:bg-gray-800 lg:h-12 lg:mt-2    shadow-2xl text-black dark:text-white lg:px-44 sm:px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center  gap-2">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={"https://static.vecteezy.com/system/resources/previews/053/738/743/non_2x/3d-icon-avatar-a-cartoon-boy-is-reading-a-book-student-school-concept-of-education-learning-png.png"}
                  alt="Learn with Jewel Logo"
                  className="h-10 w-10"
                  width={200}
                  height={200}
                />
                <span className="font-semibold text-sm md:text-base">
                  Learn <br />
                  <span>with Jewel</span>
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center hover:alert-info lg:gap-8">
            <Dropdown
              label="কোর্স"
              links={[
                { href: "/routes/course", text: "কোর্সের বিস্তারিত" },
                { href: "/routes/course/advanced", text: "অ্যাডভান্সড কোর্স" },
              ]}
            />
            <Dropdown
              label="অ্যাকাউন্ট"
              links={[
                { href: "/routes/userProfile", text: "প্রোফাইল" },
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
            <Link href="/routes/blog" className="text-sm font-bold">
              ব্লগ
            </Link>
            <Link href="/routes/jewel" className="text-sm font-bold">
              প্রতিষ্ঠাতা
            </Link>

            {/* Login Button */}
            <Link
              href="/routes/login"
              className="bg-yellow-400 text-black px-4 py-1 rounded-full shadow-md hover:bg-yellow-500 transition"
            >
              লগইন
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 rounded-full dark:bg-gray-900"
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
                links={[
                  { href: "/routes/course", text: "কোর্সের বিস্তারিত" },
                  {
                    href: "/routes/course/advanced",
                    text: "অ্যাডভান্সড কোর্স",
                  },
                ]}
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

              <li>
                <Link
                  href="/routes/login"
                  className="block text-center bg-yellow-400 text-black py-1 rounded shadow-md"
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
    <button className="flex items-center gap-1 hover:text-gray-400 transition">
      {label}
      <FaCaretDown />
    </button>
    <div className="mt-2 flex flex-col  bg-white dark:bg-gray-800 text-black dark:text-white text-sm rounded shadow-lg">
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
  </li>
);
