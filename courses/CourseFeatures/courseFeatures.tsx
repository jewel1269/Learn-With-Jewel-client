"use client";
import React from "react";

const CourseFeatures: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">কোর্সে আপনি পাচ্ছেন</h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-yellow-500"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div
              className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${feature.iconBg}`}
            >
              {feature.icon}
            </div>
            <h3 className="lg:text-2xl text-sm md:text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: "৫ মাসের কারিকুলাম",
    description: "ওয়েবসাইট রিলিজের জন্য প্রয়োজনীয় স্ট্রাকচারড কারিকুলাম।",
    icon: "📅",
    iconBg: "bg-red-200",
  },
  {
    title: "৩২ টি লাইভ ক্লাস",
    description: "ইন্ডাস্ট্রি এক্সপার্টদের নিয়ে লাইভ ক্লাস।",
    icon: "🔴",
    iconBg: "bg-pink-200",
  },
  {
    title: "৩ টি ইউনিক প্রোজেক্ট",
    description: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট তৈরি ও লঞ্চের প্র্যাকটিস।",
    icon: "🚀",
    iconBg: "bg-blue-200",
  },
  {
    title: "গ্রোথ ট্র্যাকিং",
    description: "রিয়েল টাইম ড্যাশবোর্ডে পারফরমেন্স ট্র্যাকিং।",
    icon: "📊",
    iconBg: "bg-green-200",
  },
  {
    title: "উৎসর্গীকৃত সাপোর্ট",
    description: "প্র্যাকটিক্যাল সাপোর্ট টিমের মাধ্যমে সহজ সমাধান।",
    icon: "🤝",
    iconBg: "bg-orange-200",
  },
  {
    title: "লাইফটাইম অ্যাক্সেস",
    description:
      "রেকর্ডেড ভিডিও, ক্লাস নোট এবং অন্যান্য রিসোর্সে অনলাইন অ্যাক্সেস।",
    icon: "📚",
    iconBg: "bg-purple-200",
  },
  {
    title: "সার্টিফিকেট",
    description: "কোর্স শেষে স্বীকৃত সার্টিফিকেট ও অ্যাসেসমেন্ট ভেরিফিকেশন।",
    icon: "🎓",
    iconBg: "bg-yellow-200",
  },
  {
    title: "তত্ত্ব এবং গাইডলাইন",
    description: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড তত্ত্ব ও সেরা চর্চার গাইড।",
    icon: "📖",
    iconBg: "bg-indigo-200",
  },
  {
    title: "ইন্ডাস্ট্রি লাউঞ্জ",
    description:
      "নেটওয়ার্কিং প্ল্যাটফর্ম যেখানে ২০০০+ এক্সপার্টদের সাথে সংযোগ।",
    icon: "🌐",
    iconBg: "bg-teal-200",
  },
];

export default CourseFeatures;
