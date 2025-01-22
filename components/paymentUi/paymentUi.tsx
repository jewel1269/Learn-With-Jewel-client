import Image from "next/image";
import React from "react";

const PaymentPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="text-green-600 font-medium text-lg flex items-center gap-2">
            &larr; <span>আমার কোর্স</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">পেমেন্ট ডিটেইলস</h1>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <span className="text-green-600 font-medium text-lg">
              কোর্স নির্বাচন
            </span>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <span className="text-gray-500 text-lg">পেমেন্ট</span>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="flex gap-6 items-start">
              <Image
                src="https://via.placeholder.com/150"
                alt="Course Image"
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  ওয়েব ডেভেলপমেন্ট ফুলস্ট্যাক মাস্টারক্লাস
                </h2>
                <p className="text-gray-700 mb-4">
                  এই কোর্সটি HTML, CSS, JavaScript, React, এবং Node.js-এর গভীর
                  ধারণা প্রদান করবে। এটি সম্পূর্ণ শুরু থেকে শেষ পর্যন্ত ডিজাইন
                  করা হয়েছে।
                </p>
                <h3 className="font-semibold text-gray-800 mb-2">
                  🎓 কোর্সের বেনিফিট:
                </h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>২০+ ঘন্টার লাইভ ক্লাস</li>
                  <li>ইন্ডাস্ট্রি-রেডি প্রজেক্ট</li>
                  <li>ফ্রন্টএন্ড এবং ব্যাকএন্ড টেকনোলজির ওপর দখল</li>
                  <li>লাইফটাইম কোর্স অ্যাক্সেস</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              পেমেন্ট সামারি
            </h3>
            <div className="flex justify-between text-gray-800 font-medium mb-3">
              <span>কোর্স মূল্য</span>
              <span>৳১৫০০০</span>
            </div>
            <div className="flex justify-between text-red-600 font-medium mb-3">
              <span>ডিসকাউন্ট</span>
              <span>-৳৫০০০</span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between text-gray-800 font-bold text-xl">
              <span>সর্বমোট</span>
              <span>৳১০০০০</span>
            </div>

            <button className="w-full bg-green-600 text-white py-3 mt-6 rounded-lg text-lg font-medium hover:bg-green-700 transition duration-200">
              পেমেন্ট সম্পন্ন করুন
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        <p>প্রাইভেসি পলিসি | ব্যবহারের শর্তাবলী | রিফান্ড পলিসি</p>
        <p className="mt-2">
          <a href="tel:16910" className="text-green-600 font-medium">
            হেল্পলাইন: ১৬৯১০
          </a>{" "}
          (২৪/৭ সাপোর্ট)
        </p>
      </footer>
    </div>
  );
};

export default PaymentPage;
