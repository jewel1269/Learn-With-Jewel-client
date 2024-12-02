"use client";
import Image from "next/image";
import React, { useState } from "react";
import loginLogo from "@/images/Login/6368592-removebg-preview.png";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
      }
      

    const userInformation = { name, email, password };
    console.log("User Information: ", userInformation);
  };

  return (
    <div className=" flex bg-[#070d17] flex-col items-center">
      {/* Header */}
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-wide">
          <span className="text-green-500">নিবন্ধন</span> করুন
        </h2>
        <p className="text-md text-gray-400">
          আপনার নিবন্ধন তথ্য কারো সাথে শেয়ার করবেন না
        </p>
      </div>
    <Toaster/>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-10 px-4">
        <div className="max-w-6xl w-full flex justify-center flex-col lg:flex-row bg-[#1a2235] rounded-lg shadow-2xl overflow-hidden">
          {/* Left Side: Form */}
          <div className=" p-8 lg:p-10">
            <form onSubmit={handleRegistration}>
              <div className="mb-6 ">
                <label
                  htmlFor="name"
                  className="block text-md  font-medium text-gray-300 mb-2"
                >
                  আপনার নাম*
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  নাম দিয়ে আপনি নিবন্ধন করুন।
                </p>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#0e1a2b] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fa0ec] placeholder-gray-500"
                  placeholder="আপনার নাম"
                />
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="email"
                  className="block text-md  font-medium text-gray-300 mb-2"
                >
                  আপনার ইমেইল এড্রেস *
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করুন।
                </p>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#0e1a2b] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fa0ec] placeholder-gray-500"
                  placeholder="আপনার ইমেইল"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-md font-medium text-gray-300 mb-2"
                >
                  পাসওয়ার্ড দিন *
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                  লেটার এবং 1 টি নাম্বার থাকতেই হবে।
                </p>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-3 pr-10 bg-[#0e1a2b] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fa0ec] placeholder-gray-500"
                    placeholder="Password"
                  />
                  <div className="relative ml-96">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute  inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#4fa0ec]"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className=" py-3  mt-4 border w-40 px-3 bg-green-500  border-gray-400  text-green-500 hover:bg-red-500 hover:text-red-500 font-semibold rounded-xl"
                >
                  নিবন্ধন করুন
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-400">
              <Link href="/login" className="text-[#4fa0ec] underline">
                লগইন করুন
              </Link>
            </p>
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

export default Register;
