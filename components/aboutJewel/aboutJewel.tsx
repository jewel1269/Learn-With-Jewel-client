import jewel from "@/images/jewel.jpg.png";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo-removebg-preview.png";

const AboutJewel = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-white mb-4">
        প্রতিষ্ঠাতা সম্পর্কে কিছু কথা
      </h2>

      <div>
        <main className="bg-[#080d19] min-h-screen text-custom-text py-8">
          <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
            {/* Left Text Section */}
            <div className="lg:w-1/2">
              <p className="text-lg leading-relaxed text-gray-300">
                জুয়েল মিয়া একজন প্রযুক্তি উদ্যোক্তা। ব্লকচেইন প্রযুক্তির সঙ্গে
                গড়ে তোলা ভবিষ্যৎ ২০০৮ সালে তিনি প্রতিষ্ঠা করেন বাংলাদেশের প্রথম
                ডিজিটাল এজেন্সি - এনালাইজেনা। প্রোগ্রামিং এর প্রতি ভালোবাসা এবং
                মানুষকে শেখানোর নেশাতেই তৈরি এবং এরই ধারাবাহিকতায় ২০২৩ সালে
                প্রতিষ্ঠা করেন লার্ন উইথ সুমিত প্ল্যাটফর্ম যেখানে প্রায় ৬০+
                প্রফেশনাল রিমোট প্রজেক্ট চালানো হয়েছে। লার্ন উইথ সুমিত কমিউনিটি
                চালানো একটি জনপ্রিয় প্ল্যাটফর্ম।
              </p>
              <p className="mt-4 font-medium text-white">
                <span className="text-green-500 font-bold">জুয়েল মিয়া</span>
                <br />
                প্রতিষ্ঠাতা - লার্ন উইথ জুয়েল
              </p>
              <p className="mt-2  gap-2">
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer">
                      <Image
                        src={logo}
                        alt="Learn with Jewel Logo"
                        className="h-12 -ml-4 w-20"
                        width={350}
                        height={350}
                      />
                      <span className="font-semibold text-green-500 text-sm md:text-base">
                        Learn <br />
                        <span>with Jewel</span>
                      </span>
                    </span>
                  </Link>
                </div>

                <span className="text-sm text-gray-400">
                  ড্রেড লাইসেন্স - TRAD/DNCC/009595/2022
                </span>
              </p>
            </div>

            {/* Yellow Divider */}
            <div className="hidden lg:flex h-[430px] w-[2px] bg-yellow-500"></div>

            {/* Right Image Section */}
            <div className="relative lg:w-1/2 flex justify-center">
              <div className="bg-purple-500 w-80 h-96 absolute transform rotate-3 rounded-lg -z-10"></div>
              <Image
                src={jewel}
                alt="Founder Jewel Mia"
                width={320}
                height={420}
                className="rounded-lg w-80 h-96 object-cover transform hover:rotate-0 transition-transform duration-300 shadow-lg"
              />
            </div>
          </section>
          <hr className="lg:mt-20 blur-sm  brightness-110"/>
        </main>
      </div>
    </div>
  );
};

export default AboutJewel;
