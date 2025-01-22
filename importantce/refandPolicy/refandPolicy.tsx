// components/Page.tsx
import Link from "next/link";
import React from "react";

const Refand = () => {
  return (
    <div className="text-black bg-white min-h-screen py-8 px-4 md:px-16">
      {/* Breadcrumb */}
     <div className="max-w-7xl flex flex-col justify-center mx-auto">
     <nav className="text-sm lg:ml-20 text-black mb-4">
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
      <div className="text-black lg:px-52 flex flex-col justify-center  dark:text-black   rounded-lg p-6 md:p-10  leading-relaxed">
        <h1>
          🎯 লার্ন উইথ জুয়েল থেকে কোর্স কেনার পরে কোন রকমের রিফান্ড
          রিকোয়েস্ট গ্রহণযোগ্য নয়।
          <br/> প্রতিটি কোর্স পেজে কোর্সের কন্টেন্ট ডিটেইলস
          দেয়া আছে, সো আমরা রিকোয়েস্ট করব কেনার আগে আপনি আমাদের প্রতিটি কোর্সের
          কন্টেন্ট ডিটেইলস গুলো ভালো করে চেক করে নেবেন।
        </h1>
        <h1>
         সো আমরা রিকোয়েস্ট করব কেনার আগে আপনি আমাদের প্রতিটি কোর্সের
          কন্টেন্ট ডিটেইলস গুলো ভালো করে চেক করে নেবেন।
        </h1>
      </div>
     </div>
    </div>
  );
};

export default Refand;
