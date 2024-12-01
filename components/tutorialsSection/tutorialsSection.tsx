import React from "react";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import Image from "next/image"; // Import Image component from Next.js
import tutorial from "/images/j-removebg-preview.png"; // Path adjusted if the image is in the public folder

const TutorialsSection: React.FC = () => {
  return (
    <section className="bg-[#070d17] shadow-transparent shadow-lg text-white  py-16">
      <div className="container lg:flex justify-between mx-auto px-6">
        <div className="w-3/4">
          <Image
            src={tutorial}
            alt="Learn with Jewel"
            width={250}
            height={250}
            className="rounded-lg mb-6"
          />
          <h2 className="text-3xl font-semibold mb-6">
            অসাধারণ <span className="text-green-500">টিউটোরিয়ালস</span>
          </h2>
          <p className="text-lg mb-12">
            অসাধারণ টিউটোরিয়ালস লার্ন উইথ জুয়েল তার ইউটিউব চ্যানেলে এখন পর্যন্ত
            ৩৫০ টিরও বেশি অসাধারণ টিউটোরিয়াল দিয়েছে যেগুলো ভালভাবে অনুসরণ করলে
            একজন লার্নার এর ওয়েব ডেভেলপমেন্ট যাত্রা অনেক সহজ হবে। সেই সাথে সহজ
            সরল প্রাঞ্জল এবং সাবলীল বাংলা ভাষায় বোঝানোর ধরণ প্রোগ্রামিং এর জটিল
            বিষয়গুলোর প্রতি ভয় দূর করবে বলে আমাদের বিশ্বাস।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1c1e27] hover:-translate-x-3 rounded-lg p-6">
            <div className="text-center mb-4">
              <FaJs className="text-yellow-500 text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">JavaScript</h3>
            <p className="text-gray-400 text-center mb-4">
              বিভিন্ন দিক থেকে সম্পূর্ণ ফ্রি মডার্ন জাভাস্ক্রিপ্ট কোর্স
            </p>
            <a
              href="#"
              className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1  rounded-2xl border-transparent hover:border-blue-600"
            >
              ভিডিও দেখুন
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1c1e27] hover:-translate-x-3 rounded-lg p-6">
            <div className="text-center mb-4">
              <FaReact className="text-cyan-400 text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">React JS</h3>
            <p className="text-gray-400 mb-4 text-center">
              React.js ফ্রেমওয়ার্কের বেসিক থেকে অ্যাডভান্সড টিউটোরিয়াল
            </p>
            <a
              href="#"
              className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
            >
              ভিডিও দেখুন
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1c1e27] hover:-translate-x-3 rounded-lg p-6">
            <div className="text-center mb-4">
              <FaNodeJs className="text-green-600 text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Node.js</h3>
            <p className="text-gray-400 text-center mb-4">
              Express Node & MongoDB চিটোটোরিয়াল
            </p>
            <a
              href="#"
              className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
            >
              ভিডিও দেখুন
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1c1e27] hover:-translate-x-3 rounded-lg p-6">
            <div className="text-center mb-4">
              <FaCss3Alt className="text-blue-500 text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Tailwind CSS</h3>
            <p className="text-gray-400 mb-4 text-center ">
              Tailwind CSS নিয়ে বাংলাদেশের প্রখ্যাত টিউটোরিয়াল
            </p>
            <a
              href="#"
              className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
            >
              ভিডিও দেখুন
            </a>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1c1e27] hover:-translate-x-3 rounded-lg p-6">
            <div className="text-center mb-4">
              <FaCss3Alt className="text-blue-500 text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Tailwind CSS</h3>
            <p className="text-gray-400 mb-4 text-center ">
              Tailwind CSS নিয়ে বাংলাদেশের প্রখ্যাত টিউটোরিয়াল
            </p>
            <a
              href="#"
              className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
            >
              ভিডিও দেখুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
