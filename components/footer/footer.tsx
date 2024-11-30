import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaCcAmex,
  FaGooglePay,
} from "react-icons/fa";
import { SiBakalari, SiNationalgrid } from "react-icons/si";



const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070d17] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <h2 className="text-3xl font-bold">Learn with Jewel</h2>
          <p className="text-sm text-gray-400">
            ডিভেলপার হেল্পলাইন | পেমেন্ট করুন | যোগাযোগ করুন
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Visa Icon */}
            <FaCcVisa className="text-3xl text-blue-600" />
            {/* MasterCard Icon */}
            <FaCcMastercard className="text-3xl text-blue-700" />
            {/* PayPal Icon */}
            <FaPaypal className="text-3xl text-blue-500" />
            {/* American Express Icon */}
            <FaCcAmex className="text-3xl text-blue-400" />
            {/* Google Pay Icon */}
            <FaGooglePay className="text-3xl text-green-500" />
            {/* bKash Icon */}
            <SiBakalari className="text-3xl text-pink-500" />
            {/* Nagad Icon */}
            <SiNationalgrid className="text-3xl text-orange-500" />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">
            © 2024 Learn with Jewel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
