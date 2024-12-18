import React from "react";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaCuttlefish } from "react-icons/fa";
import Image from "next/image"; // Import Image component from Next.js
import tutorial from "/images/j-removebg-preview.png"; // Path adjusted if the image is in the public folder

const TutorialsSection: React.FC = () => {
  return (
    <section className="bg-white shadow-transparent shadow-lg text-black  py-16">
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
          <h1 className="text-lg mb-12">
            অসাধারণ টিউটোরিয়ালস লার্ন উইথ জুয়েল তার ইউটিউব চ্যানেলে এখন পর্যন্ত
            ৩৫০ টিরও বেশি অসাধারণ টিউটোরিয়াল দিয়েছে যেগুলো ভালভাবে অনুসরণ করলে
            একজন লার্নার এর ওয়েব ডেভেলপমেন্ট যাত্রা অনেক সহজ হবে। সেই সাথে সহজ
            সরল প্রাঞ্জল এবং সাবলীল বাংলা ভাষায় বোঝানোর ধরণ প্রোগ্রামিং এর জটিল
            বিষয়গুলোর প্রতি ভয় দূর করবে বলে আমাদের বিশ্বাস।
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-white hover:-translate-x-3 border border-black rounded-lg p-6">
    <div className="text-center mb-4">
      <FaHtml5 className="text-orange-500 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">HTML</h3>
    <h1 className="text-black text-center mb-4">
      HTML শেখার জন্য সহজ ও কার্যকরী টিউটোরিয়াল।
    </h1>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 2 */}
  <div className="bg-white hover:-translate-x-3 border border-black  rounded-lg p-6">
    <div className="text-center mb-4">
      <FaCss3Alt className="text-blue-500 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">CSS</h3>
    <h1 className="text-black mb-4 text-center">
      CSS স্টাইলিংয়ের জন্য বেসিক থেকে অ্যাডভান্সড টিউটোরিয়াল।
    </h1>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 3 */}
  <div className="bg-white hover:-translate-x-3 border border-black  rounded-lg p-6">
    <div className="text-center mb-4">
      <FaJs className="text-yellow-500 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">JavaScript</h3>
    <h1 className="text-black text-center mb-4">
      বিভিন্ন দিক থেকে সম্পূর্ণ ফ্রি মডার্ন জাভাস্ক্রিপ্ট কোর্স।
    </h1>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 4 */}
  <div className="bg-white border border-black  hover:-translate-x-3 rounded-lg p-6">
    <div className="text-center mb-4">
      <FaCuttlefish className="text-green-500 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">C</h3>
    <h1 className="text-black text-center mb-4">
      C প্রোগ্রামিং শেখার সহজ উপায়।
    </h1>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 5 */}
  <div className="bg-white border border-black  hover:-translate-x-3 rounded-lg p-6">
    <div className="text-center mb-4">
      <FaCuttlefish className="text-purple-500 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">C++</h3>
    <h4 className="text-black text-center mb-4">
      C++ এর মাধ্যমে অ্যাডভান্সড প্রোগ্রামিং টেকনিক।
    </h4>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 6 */}
  <div className="bg-white border border-black  hover:-translate-x-3 rounded-lg p-6">
    <div className="text-center mb-4">
      <FaReact className="text-cyan-400 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">React.js</h3>
    <h3 className="text-black text-center mb-4">
      React.js ফ্রেমওয়ার্কের বেসিক থেকে অ্যাডভান্সড টিউটোরিয়াল।
    </h3>
    <a
      href="#"
      className="text-blue-400 flex justify-center hover:text-blue-600 border-2 p-1 rounded-2xl border-transparent hover:border-blue-600"
    >
      ভিডিও দেখুন
    </a>
  </div>

  {/* Card 7 */}
  <div className="bg-white border border-black  hover:-translate-x-3 rounded-lg p-6">
    <div className="text-center mb-4">
      <FaNodeJs className="text-green-600 text-4xl mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-center mb-2">Node.js</h3>
    <h1 className="text-black text-center mb-4">
      Express Node & MongoDB চিটোটোরিয়াল।
    </h1>
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
