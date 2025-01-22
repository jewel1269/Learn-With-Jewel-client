import Image from "next/image";
import loginLogo from "@/images/Login/6368592-removebg-preview.png";

const ForgotPass = () => {
  return (
    <div className="flex bg-white flex-col items-center ">
      {/* Header */}
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-3xl lg:text-3xl font-extrabold text-black mb-4 tracking-wide">
          <span className="text-green-500">পাসওয়ার্ড</span> ভুলে গেছেন?
        </h2>
        <p className="text-md text-gray-900">
          আপনার ইমেইল এড্রেস দিয়ে রিসেট করে নিন
        </p>
      </div>

      {/* Main Content */}
      <div className="w-auto mt-10 px-4">
        <div className="w-full lg:flex justify-center rounded-lg shadow-md overflow-hidden">
          {/* Left Side: Form */}
          <div className="p-8 lg:p-10 bg-white">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-900 mb-2"
                >
                  আপনার ইমেইল এড্রেস*
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
                </p>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-600 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fa0ec] placeholder-gray-500"
                  placeholder="আপনার ইমেইল"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-1 mt-4 w-56 px-5 text-sm border border-gray-400 text-green-500 bg-transparent hover:bg-red-500 hover:text-white font-semibold rounded-xl transition duration-200"
                >
                  ভেরিফিকেশন করুন
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-10 bg-gray-100">
            <Image
              width={400}
              height={400}
              src={loginLogo}
              alt="Forgot Password Illustration"
              className="h-96 w-80 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
