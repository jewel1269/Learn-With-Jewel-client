// components/Page.tsx
import Link from "next/link";
import React from "react";

const Term = () => {
  return (
    <div className="text-black bg-white min-h-screen py-8 lg:px-4 px-2 md:px-16">
      {/* Breadcrumb */}
     <div className="max-w-7xl flex flex-col justify-center mx-auto">
     <nav className="text-sm lg:ml-20 text-black mb-4">
        <Link href="/" className="text-black hover:underline">
          হোম 
        </Link>{" "}
        &gt; <span className="text-red-500">টেক্সট</span>
      </nav>

      {/* Title */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-500">টার্মস এবং কন্ডিশনস</h1>
        <h1 className="text-white mt-2">
          লার্ন উইথ জুয়েল এবং প্রতিশ্রুত স্বার্থান্বেষণ সম্পর্কে শিক্ষণ
        </h1>
      </header>

      {/* Content */}
      <article className="text-black lg:px-44 rounded-lg lg:p-6 p-3 md:p-10  leading-relaxed">
        <li>
          🎯 আমার অধিকারগুলো জানুন বিধিমালা এবং লার্ন উইথ জুয়েল অধিকারসম্পর্কিত
          বিধিমালায় আপনার ব্যবসায়িক কৌশল রূপান্তরিত এর গুরুত্বের কথা বলা
          হয়েছে। লার্ন উইথ জুয়েল নিশ্চিত করে যে আপনি সামগ্রিকভাবে একটি
          মানসম্পন্ন ন্যায্যতার পরিবেশে রয়েছেন।
        </li>

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

        <li className="mt-6">
          🎯 আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে আমাদের সাথে যোগাযোগ করতে দ্বিধা
          করবেন না!
        </li>
      </article>
     </div>
    </div>
  );
};

export default Term;
