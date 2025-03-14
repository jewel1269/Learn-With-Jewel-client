"use client";
import Image from "next/image";
import React, { useState } from "react";
import loginLogo from "@/images/Login/6368592-removebg-preview.png";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
    }

    const userInformation = { email, password };
    console.log("User Information: ", userInformation);
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4 tracking-wide">
          <span className="text-green-500">লগইন</span> করুন
        </h2>
        <h1 className="text-md text-gray-800">
          আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না
        </h1>
      </div>
      <Toaster />
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-10 px-4">
        <div className="max-w-6xl w-full flex justify-center flex-col lg:flex-row  rounded-lg overflow-hidden">
          {/* Left Side: Form */}
          <div className=" p-8 lg:p-10">
            <form onSubmit={handleRegistration}>
              <div className="mb-6 ">
                <label
                  htmlFor="email"
                  className="block font-bold text-lg   text-gray-900 mb-2"
                >
                  আপনার ইমেইল এড্রেস*
                </label>
                <h1 className="text-xs text-black mb-2">
                  যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
                </h1>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-1 border border-gray-700 text-black rounded-lg  placeholder-gray-500"
                  placeholder="boss@gmail.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block font-bold text-lg  text-gray-800 mb-2"
                >
                  পাসওয়ার্ড দিন*
                </label>
                <h1 className="text-xs text-black mb-2">
                  পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                  লেটার এবং 1 টি নাম্বার থাকতেই হবে।
                </h1>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-1 pr-10 border border-gray-700  text-black rounded-lg  placeholder-gray-500"
                    placeholder="Password"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 text-gray-400 hover:text-[#4fa0ec]"
                    >
                      {showPassword ? "⚡" : "👁️"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" py-1  mt-4 border w-40 px-3 t bg-transparent transition duration-200  border-gray-400  text-green-500 hover:bg-slate-300 hover:text-red-500 font-semibold rounded-xl"
                >
                  লগইন করুন
                </button>
              </div>
            </form>
            <div className="flex justify-between items-center">
              <div className="mt-6 text-center text-sm text-black">
                <Link
                  href="/routes/passForget"
                  className="text-red-500 hover:underline"
                >
                  পাসওয়ার্ড ভুল গেছেন?
                </Link>
              </div>
              <Link href={"/routes/registration"}>
                <h1 className="underline mt-6 text-green-500 font-bold text-sm">
                  নিবন্ধন করুন
                </h1>
              </Link>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="w-full lg:w-1/2 lg:-mt-16 flex flex-col justify-center items-center p-10">
            <Image
              width={500}
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

export default Login;
