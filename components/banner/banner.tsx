import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="font-sans flex justify-center items-center lg:mt-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-red-100 lg:w-[1250px] py-8 px-12 lg:px-20 border border-black rounded-2xl max-w-8xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold text-black">
              বাংলাদেশ শিখবে <span className="text-yellow-300">লাইভ</span> 🔴
            </h1>
            <p className="text-black mt-4">
              কিনুন শেখার মাধ্যমে বানান আপনার ফিউচার ব্রাইট
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 mt-6 rounded-md hover:bg-yellow-500 transition duration-300">
              শেখা শুরু করুন →
            </button>
            <p className="text-black text-sm mt-4">
              ১০০০+ গ্রাজুয়েটরা কাজ করছে বিভিন্ন দেশি ও বিদেশি প্রতিষ্ঠানে:
            </p>
          </div>

          {/* Right Content */}
          <div className="relative bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 h-72 lg:h-80 rounded-md shadow-md">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfy6UUJ38VnmN10F_ZYXn65OOCfNgMtkcs8Q&s"
              alt="A banner image showcasing learning opportunities"
              height={800}
              width={700}
              className="object-cover bg-cover rounded-2xl shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
