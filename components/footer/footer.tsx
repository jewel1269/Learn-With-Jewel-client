import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import bkash from "@/images/Payment/b-removebg-preview.png";
import nagad from "@/images/Payment/nagad-removebg-preview.png";
import stripe from "@/images/Payment/stri-removebg-preview.png";
import ssl from "@/images/Payment/s-removebg-preview.png";
import rocket from "@/images/Payment/rocket-removebg-preview.png";
import upay from "@/images/Payment/upay-removebg-preview.png";
import Link from "next/link";
import logo from "@/images/logo-removebg-preview.png";

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
        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-400">Pay With</p>
         
          <div className="flex justify-center items-center space-x-6">
            {/* Stripe */}
            <div className="w-12 h-12">
              <Image
                src={stripe}
                alt="Stripe"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Bkash */}
            <div className="w-12 h-12">
              <Image
                src={bkash}
                alt="Bkash"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Nagad */}
            <div className="w-12 h-12">
              <Image
                src={nagad}
                alt="Nagad"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Rocket */}
            <div className="w-12 h-12">
              <Image
                src={rocket}
                alt="Rocket"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Upay */}
            <div className="w-12 h-12">
              <Image
                src={upay}
                alt="Upay"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Yellow Divider */}
            <div className="hidden lg:flex h-[50px] w-[2px] bg-yellow-500"></div>

            {/* SSL Commerce */}
            <div className="flex flex-col items-center w-12">
              <Image
                src={ssl}
                alt="SSL Commerce"
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-xs text-gray-400 mt-1">SSL Certified</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaGithub size={20} />
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
