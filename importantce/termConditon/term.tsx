// components/Page.tsx
import Link from "next/link";
import React from "react";

const Term = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline text-red-500">
          হোম
        </Link>{" "}
        &gt; <span>টেক্সট</span>
      </nav>

      {/* Title */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-500">টার্মস এবং কন্ডিশনস</h1>
        <p className="text-gray-600 mt-2">
          লার্ন উইথ জুয়েল এবং প্রতিশ্রুত স্বার্থান্বেষণ সম্পর্কে শিক্ষণ
        </p>
      </header>

      {/* Content */}
      <article className="text-white   shadow-md rounded-lg p-6 md:p-10  leading-relaxed">
        <p>
          🎯 আমার অধিকারগুলো জানুন বিধিমালা এবং লার্ন উইথ জুয়েল অধিকারসম্পর্কিত
          বিধিমালায় আপনার ব্যবসায়িক কৌশল রূপান্তরিত এর গুরুত্বের কথা বলা
          হয়েছে। লার্ন উইথ জুয়েল নিশ্চিত করে যে আপনি সামগ্রিকভাবে একটি
          মানসম্পন্ন ন্যায্যতার পরিবেশে রয়েছেন।
        </p>

        <ul className="list-disc py-2 pl-5 mt-4 space-y-2">
          <li>
            🎯 লার্ন উইথ জুয়েল নিশ্চিত করে যে প্রতিযোগিতামূলক অ্যাডভান্সমেন্ট
            (প্ল্যাটফর্মে এবং সম্মেলনে) আন্তর্জাতিক মানদণ্ড পূরণ করে।
          </li>
          <li>
            🎯 টেকনিক্যাল শিক্ষার ক্ষেত্রে কৌশলগত প্রশিক্ষণ ব্যবস্থা, ফাইলিং এবং
            লগইন তথ্য প্রদান করা।
          </li>
          <li>
            🎯 লার্ন উইথ জুয়েল পরিচালিত সমস্ত প্রক্রিয়া এবং পরিষেবাগুলো
            স্বচ্ছ।
          </li>
          <li>
            🎯 ব্যবহারকারীদের সুরক্ষার জন্য সুনির্দিষ্ট গাইডলাইন প্রণয়ন এবং তা
            বাস্তবায়নের পদক্ষেপ নেওয়া।
          </li>
          <li>
            🎯অনুগ্রহ করে লার্ন উইথ হাসিন হায়দারের সাপোর্ট চ্যাট, গ্রুপ চ্যাট
            এবং ফেসবুক পেজে যেকোন ধরনের ব্যাক্তিগত আক্রমন এবং হিংসাত্মক
            কথাবার্তা থেকে বিরত থাকবেন। এরকম যেকোন কাজের ফলশ্রুতিতে আপনাকে
            সাপোর্ট চ্যাট থেকে মিউট/ব্যান করে দেয়া হবে এবং পুনরাবৃত্তির ক্ষেত্রে
            আপনার অ্যাকাউন্ট যেকোন সময় টার্মিনেট করা হতে পারে
          </li>
          <li>
            🎯কমিউনিটি এবং সামাজিক যোগাযোগের জন্য ইনোভেটিভ ডিজিটাল প্ল্যাটফর্ম
            তৈরির পরিকল্পনা।
          </li>
          <li>
            🎯আপনি এই কোর্সগুলো আপনার একটি কম্পিউটার এবং একটি মোবাইলফোন থেকে
            একসেস করতে পারবেন। এর বেশি কম্পিউটার থেকে ব্যবহার করা প্রয়োজন হলে
            সাপোর্ট পেজে আমাদের কাছ থেকে অনুমতি গ্রহণ করতে হবে
          </li>
        </ul>

        <p className="mt-6">
          🎯 আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে আমাদের সাথে যোগাযোগ করতে দ্বিধা
          করবেন না!
        </p>
      </article>
    </div>
  );
};

export default Term;
