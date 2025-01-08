

import Image from "next/image";
import React from "react";

const CourseDetails = () => {
  return (
    <div className=" py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/3 p-6">
            {/* Badge */}
            <div className="bg-red-200 text-red-700 text-xs font-bold px-3 py-1 rounded-full inline-block">
              লাইভ কোর্স
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold mt-4 text-gray-800">
              App Development with Flutter
            </h1>

            {/* Rating */}
            <div className="flex items-center mt-3">
              <span className="text-green-600 text-lg font-bold">4.9</span>
              <span className="text-yellow-500 ml-2 text-lg">★★★★★</span>
              <span className="text-gray-500 text-sm ml-3">(293 Ratings)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              ১ কোর্সেই অ্যাপ ডেভেলপমেন্ট শেখার সব কিছু। ৭২ টি লাইভ ক্লাস এবং
              ২৪০ টি বিহ - রেকর্ডেড ভিডিও এর মাধ্যমে শিখবেন একদম বেসিক থেকে
              অ্যাডভান্স লেভেলের সবকিছু! সাথে টেকনিকাল সাপোর্ট, মেন্টর সাপোর্ট,
              জব প্লেসমেন্ট সাপোর্ট এবং সকল লাইফটাইম এক্সেস তো থাকছেই!
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-600">
                ১০ম ব্যাচ ভর্তি হোন
              </button>
              <span className="text-2xl font-bold text-gray-700"><span className="text-2xl font-extrabold">৳</span>৮,০০০</span>
              <span className="text-sm text-gray-600">প্রোমো কোড</span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mt-6">
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                ৮৪ টি লাইভ ক্লাস
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                ১৮ টি প্রজেক্টসমূহ
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                ৫০ দিন বাকি
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                ৪৭৮ টি প্রি রেকর্ডেড ভিডিও
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-start items-center mt-4">
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                জব প্লেসমেন্ট সাপোর্ট
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 rounded text-gray-700">
                ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 relative h-64 lg:h-auto">
            <Image
              fill
              src="https://via.placeholder.com/400x300"
              alt="Course Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="bg-white text-blue-500 font-bold px-6 py-2 rounded-lg hover:bg-gray-100">
                ভিডিও দেখুন
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-5">
          <div className="border border-gray-300 px-4 py-2 rounded text-gray-700">
            📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি
          </div>
          <div className="border border-gray-300 px-4 py-2 rounded text-gray-700">
            📅 লাইভ ক্লাস: রাত ৯:০০-১০:৩০ (বুধ, শনি, সোম)
          </div>
          <div className="border border-gray-300 px-4 py-2 rounded text-gray-700">
            🕒 ইনস্ট্যান্ট সাপোর্ট: দিনে ১৬ ঘণ্টা পর্যন্ত
          </div>
          <div className="border border-gray-300 px-4 py-2 rounded text-gray-700">
            📚 সিট বাকি: ৬২ টি
          </div>
          <div className="border border-gray-300 px-4 py-2 rounded text-gray-700">
            ✅ ভর্তি চলছে: ১০ম ব্যাচ
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
