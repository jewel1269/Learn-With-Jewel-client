import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0b1325] text-white">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold mb-4 text-[#5dc2f1]">লগিন করুন</h1>
        <p className="mb-8 text-sm text-gray-300">
          আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না
        </p>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
              আপনার ইমেইল এড্রেস <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="boss@gmail.com"
              className="w-full px-4 py-2 bg-[#0f1c38] text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-400"
            >
              পাসওয়ার্ড দিন <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="anyPassword1971"
              className="w-full px-4 py-2 bg-[#0f1c38] text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            লগিন করুন
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-right">
          <a href="#" className="text-sm text-blue-400 hover:underline">
            পাসওয়ার্ড ভুলে গেছেন?
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <Image
          src="/images/login.png" // Replace with your image path
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
