import Image from "next/image";
import React from "react";
import banner from "@/images/banner2.jpg.png";

const Banner = () => {
  return (
    <div className="relative w-full  h-[400px] md:h-[500px] lg:h-[700px]">
      {/* Banner Image */}

      <Image
        src={banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-75 blur-md"
      />


      {/* Cards */}
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className=" p-6 border-2 border-black rounded shadow-lg w-[250px] sm:w-[300px] md:w-[350px] text-center">
          <h2 className="text-xl font-semibold text-black">Card 1</h2>
          <p className="text-black">
            This is the first card inside the banner.
          </p>
        </div>
        <div className=" p-6 border-2 border-black  rounded shadow-lg w-[250px] sm:w-[300px] md:w-[350px] text-center">
          <h2 className="text-xl font-semibold text-balck">Card 2</h2>
          <p className="text-black">
            This is the second card inside the banner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
