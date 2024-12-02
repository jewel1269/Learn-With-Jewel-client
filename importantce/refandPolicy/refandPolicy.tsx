// components/Page.tsx
import Link from "next/link";
import React from "react";

const Refand = () => {
  return (
    <div className="bg-[#070d17] min-h-screen py-8 px-4 md:px-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-white mb-4">
        <Link href="/" className="hover:underline ">
          হোম
        </Link>{" "}
        &gt; <span className="text-red-500">রিফান্ড পলিসি</span>
      </nav>

      {/* Title */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-500">রিফান্ড পলিসি</h1>
      </header>

      {/* Content */}
      <div className="text-white  flex flex-col justify-center  dark:text-black  shadow-md rounded-lg p-6 md:p-10  leading-relaxed">
        <p>
          🎯 লার্ন উইথ জুয়েল থেকে কোর্স কেনার পরে কোন রকমের রিফান্ড
          রিকোয়েস্ট গ্রহণযোগ্য নয়।
          <br/> প্রতিটি কোর্স পেজে কোর্সের কন্টেন্ট ডিটেইলস
          দেয়া আছে, সো আমরা রিকোয়েস্ট করব কেনার আগে আপনি আমাদের প্রতিটি কোর্সের
          কন্টেন্ট ডিটেইলস গুলো ভালো করে চেক করে নেবেন।
        </p>
        <p>
         সো আমরা রিকোয়েস্ট করব কেনার আগে আপনি আমাদের প্রতিটি কোর্সের
          কন্টেন্ট ডিটেইলস গুলো ভালো করে চেক করে নেবেন।
        </p>
      </div>
    </div>
  );
};

export default Refand;
