// components/SupportPage.tsx
import Link from "next/link";
import React from "react";

const SupportPage: React.FC = () => {
  return (
    <div className="bg-[#070d17] min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-white mb-4">
          <Link href="/" className="hover:underline">
            হোম
          </Link>{" "}
          &gt; <span className="text-red-500">সাপোর্ট</span>
        </nav>

        <h1 className="text-3xl text-red-500 font-bold text-center mb-6">সাপোর্ট</h1>

        <div className="lg:px-32 text-white">
          <p className="mb-4 text-white">
            🎯 কোর্স সম্পর্কিত যেকোন প্রশ্নের বা সাহায্যের জন্য আমাদের{" "}
            <a
              href="https://m.me/learnwithhasinhayder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              সাপোর্ট চ্যানেলে
            </a>{" "}
            গিয়ে প্রশ্ন করুন। আমাদের সাপোর্ট চ্যানেলের ওয়েব অ্যাড্রেস হল{" "}
            <a
              href="https://m.me/learnwithhasinhayder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://m.me/learnwithjewel
            </a>
            ।
          </p>

          <p className="mb-4 text-gray-300 leading-relaxed">
            🎯 আমাদের কিছু কোর্স এর স্টুডেন্টদের জন্য কোর্স স্পেসিফিক ফেসবুক
            সাপোর্ট গ্রুপ রয়েছে যেখানে আপনি আমাদের সাথে কোর্স রিলেটেড
            (হোমওয়ার্ক, প্র্যাকটিস) আলোচনা করতে পারবেন। আমরা আমাদের টেকনিক্যাল
            টিমের মাধ্যমে আপনাদের প্রশ্নের উত্তর দিয়ে থাকি।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 leading-relaxed">
            🎯 সাপোর্ট পাওয়ার সময় নিচের বিষয়গুলো লক্ষ্য রাখতে হবে
          </h2>

          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>🎯 আপনার ভিডিওগুলো মনোযোগ দিয়ে দেখবেন</li>
            <li>🎯 আপনার ভিডিওগুলো স্কিপ করে করে দেখবেন না</li>
            <li className="leading-relaxed">
              🎯 আমাদের সাপোর্ট টিমের কাছে থেকে কোর্স এর বাইরে কোনো ধরনের
              সাহায্য আশা করবেন না। অনেকেই ক্লায়েন্টের কাজ করেন যে ক্লায়েন্টের
              এই কাজ কিভাবে করতে হবে সেটা বুঝতে পারছেন না বা ক্লায়েন্টের কাজ
              করতে গিয়ে আটকে গেছেন (যদি ফিচার করা হয়) – এই টাইপের কাজ করা জন্য
              অনুমতি করে থাকে বিব্রত থাকবেন
            </li>
            <li className="leading-relaxed">
              🎯 ভিডিও দেখে সমস্যার সমাধান না হলে আমাদের সাপোর্টে লিখুন। জানাবেন
              আমরা সাহায্য করার চেষ্টা করব যদি আপনার সাপোর্ট ভিডিও হোস্টিং
              প্ল্যাটফর্মে কোনো সমস্যা থাকে। যেমন লগইন, ভিডিও প্লেব্যাক, কিংবা
              অন্যান্য টেকনিক্যাল ইস্যুর ক্ষেত্রে।
            </li>
          </ul>

          <p className="mt-6 text-gray-300">
            নাম উইথ জুয়েল সাথে আপনার দেখা আবারো হোক
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
