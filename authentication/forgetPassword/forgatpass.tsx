"use client";
import Image from "next/image";
import loginLogo from "@/images/Login/6368592-removebg-preview.png";

const ForgatPass = () => {
  return (
    <div className=" flex bg-[#070d17] flex-col items-center">
      {/* Header */}
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-wide">
          <span className="text-green-500">পাসওয়ার্ড</span> ভুলে গেছেন?
        </h2>
        <p className="text-md text-gray-400">
          আপনার ইমেইল এড্রেস দিয়ে রিসেট করে নিন
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-10 px-4">
        <div className="max-w-7xl w-full flex justify-around flex-col lg:flex-row bg-[#1a2235] rounded-lg shadow-2xl overflow-hidden">
          {/* Left Side: Form */}
          <div className=" p-8 lg:p-10">
            <form>
              <div className="mb-6 ">
                <label
                  htmlFor="email"
                  className="block text-md  font-medium text-gray-300 mb-2"
                >
                  আপনার ইমেইল এড্রেস*
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
                </p>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-1 bg-[#0e1a2b] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fa0ec] placeholder-gray-500"
                  placeholder="আপনার ইমেইল"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className=" py-3 mt-4 border w-44 px-5   border-gray-400  text-green-500 hover:bg-red-500 hover:text-red-500 font-semibold rounded-xl"
                >
                  ভেরিফিকেশন করুন
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Illustration */}
          <div className="w-full lg:w-1/2 bg-[#102234] flex flex-col justify-center items-center p-10">
            <Image
              width={400}
              height={400}
              src={loginLogo}
              alt="Login Illustration"
              className="w-4/5 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgatPass;
