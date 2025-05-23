import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";

import Link from "next/link";
import payment from "@/images/payment.jpg";
import logo from "@/images/jewel-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 border border-gray-100 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={logo}
                  alt="Learn with Jewel Logo"
                  className="h-20 w-20"
                  width={400}
                  height={400}
                />
                <span className="font-semibold text-sm md:text-base">
                  Learn <br />
                  <span>with Jewel</span>
                </span>
              </span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:underline">
              যোগাযোগ
            </Link>
            <Link href="#" className="hover:underline">
              শর্তাবলী
            </Link>
            <Link href="#" className="hover:underline">
              প্রাইভেসি পলিসি
            </Link>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center items-center">
          <div className="mt-8 text-center">
            <p className="text-sm md:text-base">
              ঠিকানা: উত্তরা সেক্টর-১০, ঢাকা, বাংলাদেশ
            </p>
            <p className="text-sm md:text-base">ফোন: +৮৮০১১২৩৪৫৬৭৮৯</p>
            <p className="text-sm md:text-base">
              ইমেইল: info@learnwithjewel.com
            </p>
          </div>

          <div className="w-full flex justify-center mx-auto mt-4">
            <Image
              src={payment}
              alt="payment"
              width={800}
              height={800}
              className="object-cover lg:h-[120px] lg:w-[1000px] w-full"
            />
          </div>

          {/* Address and Contact Information */}
        </div>
        {/* Social Icons */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-blue-700">
              <FaFacebookF size={24} className="transition-all" />
            </Link>
            <Link href="#" className="text-red-500">
              <FaYoutube size={24} className="transition-all" />
            </Link>
            <Link href="#" className="text-black">
              <FaLinkedinIn size={24} className="transition-all" />
            </Link>
            <Link href="#" className="text-green-500">
              <FaGithub size={24} className="transition-all" />
            </Link>
          </div>
        </div>
        <hr className="mt-5" />

        {/* Footer Bottom */}
        <div className="mt-3 text-center text-sm text-red-500">
          <h1>কপিরাইট © ২০২৫ লার্ন উইথ জুয়েল। সর্বস্বত্ব সংরক্ষিত।</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
