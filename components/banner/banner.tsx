import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" font-serif flex justify-center items-center lg:mt-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-red-100 lg:w-[1400px] md:w-full py-8 px-6 lg:px-20 lg:border border-black rounded-2xl max-w-8xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2 text-black">
              বাংলাদেশ শিখবে <span className="text-yellow-400">লাইভ</span>{" "}
              <span className="loading text-red-500 font-bold loading-ring loading-lg"></span>
            </h1>
            <p className="text-black mt-4">
              স্কিল শেখার মাধ্যমে বদলে ফেলুন নিজের ভবিষ্যৎ
            </p>
            <Link href={"/routes/course"}>
              <button className="bg-yellow-400 text-black px-6 py-3 mt-6 rounded-md hover:bg-yellow-500 transition duration-300">
                শেখা শুরু করুন →
              </button>
            </Link>
            <p className="text-black text-sm mt-4">
              ১০+ গ্রাজুয়েটরা কাজ করছে বিভিন্ন দেশি ও বিদেশি প্রতিষ্ঠানে:
            </p>
            <div className="flex flex-col lg:mt-8 divide-y-2">
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 text-2xl"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black text-2xl"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-2xl"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content with 3D Effect */}
          <div className="relative perspective-1000">
            <div className="transform-style-3d hover:rotate-y-6 hover:scale-105 transition-all duration-500">
              <div className="relative bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 h-72 lg:h-80 rounded-md shadow-md">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfy6UUJ38VnmN10F_ZYXn65OOCfNgMtkcs8Q&s"
                  alt="A banner image showcasing learning opportunities"
                  fill
                  className="object-cover bg-cover rounded-2xl shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
