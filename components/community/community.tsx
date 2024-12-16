import React from "react";
import community from "@/images/comm-removebg-preview.png";
import Image from "next/image";

const Community: React.FC = () => {
  return (
    <header className="bg-white text-black text-center py-5">
      <div className="flex justify-center">
        <Image
          src={community}
          alt="Learn with Jewel"
          width={250}
          height={250}
          className="rounded-lg mb-6"
        />
      </div>
      <h1 className="text-2xl font-bold">
        কমিউনিটি <span className="text-green-500">কন্ট্রিবিউশন</span>
      </h1>
      <p className="text-sm">কমিউনিটির জন্য আমাদের কিছু উদ্যোগমুলক কাজ</p>
    </header>
  );
};

export default Community;
