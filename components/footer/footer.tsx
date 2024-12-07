import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";

import Link from "next/link";
import logo from "@/images/logo-removebg-preview.png";
import payment from "@/images/payment.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#070815] border border-black rounded-3xl text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={logo}
                  alt="Learn with Jewel Logo"
                  className="h-12 w-20"
                  width={350}
                  height={350}
                />
                <span className="font-semibold text-sm md:text-base">
                  Learn <br />
                  <span>with Jewel</span>
                </span>
              </span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              যোগাযোগ
            </a>
            <a href="#" className="hover:underline">
              শর্তাবলী
            </a>
            <a href="#" className="hover:underline">
              প্রাইভেসি পলিসি
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="w-full  mx-auto mt-4">
          <Image
            src={payment}
            alt="payment"
            width={1000}
            height={1000}
            className=" object-cover w-full"
          />
        </div>

        {/* Social Icons */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebookF size={24} className="transition-all" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <FaYoutube size={24} className="transition-all" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaLinkedinIn size={24} className="transition-all" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaGithub size={24} className="transition-all" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>কপিরাইট © 2024 লার্ন উইথ জুয়েল। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
