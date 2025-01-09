import Image from "next/image";
import React from "react";

const PaymentPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button className="text-green-600 font-medium">
            &larr; আমার কার্ট
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center">
              1
            </div>
            <span className="text-green-600 font-medium">
              অর্ডার কনফার্মেশন
            </span>
          </div>
          <span className="text-gray-400">...</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center">
              2
            </div>
            <span className="text-gray-400">পেমেন্ট</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex gap-4 items-start">
              <Image
                fill
                src="https://via.placeholder.com/100"
                alt="Product"
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ,...)
                </h2>
                <p className="text-gray-600">
                  PCMB কমপ্লিট প্যাকেজ (Cycle 1-4) + BEI 2.0 কমপ্লিট প্যাকেজ
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-gray-800 mb-2">
                🎁 এই প্রোডাক্টের সাথে পাচ্ছেন -
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  HSC 25 অনলাইন ব্যাচ - বাংলা 2.0
                </li>
                <li className="text-gray-700">
                  HSC 25 অনলাইন ব্যাচ - ইংরেজি 2.0
                </li>
                <li className="text-gray-700">HSC 25 অনলাইন ব্যাচ - ICT 2.0</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-80 bg-gray-100 rounded-md p-4">
            <div className="flex justify-between text-gray-800 font-medium mb-3">
              <span>প্রোডাক্টের মূল্য</span>
              <span>৳9000</span>
            </div>
            <div className="flex justify-between text-red-600 font-medium mb-3">
              <span>ডিসকাউন্ট</span>
              <span>-৳2000</span>
            </div>
            <div className="border-t border-gray-300 my-3"></div>
            <div className="flex justify-between text-gray-800 font-bold text-lg">
              <span>সর্বমোট (ভ্যাট সহ)</span>
              <span>৳7000</span>
            </div>

            <button className="w-full bg-green-600 text-white py-2 mt-6 rounded-md font-medium hover:bg-green-700">
              শুরু করুন
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm mt-6">
        <p>প্রাইভেসি পলিসি - ব্যবহারকারীর শর্তাবলী - রিফান্ড পলিসি</p>
        <p className="mt-2">
          <a href="tel:16910" className="text-green-600 font-medium">
            কল করুন: 16910
          </a>{" "}
          (24x7)
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
