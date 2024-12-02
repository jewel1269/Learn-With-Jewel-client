// components/FAQPage.tsx
import Link from "next/link";
import React from "react";

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      question: "প্রশ্ন: আপনারা প্রোমোশনাল ভিডিও কেন বানান না?",
      answer:
        "উত্তর: আমরা আমাদের অলস সময়কে বিনিয়োগ করতে পারি কোর্সের কন্টেন্ট আরো শক্তিশালী করতে। কোর্সের ফিডব্যাক, কোয়ালিটি আরো ভালো করতে চাই। তাই প্রোমোশনাল ভিডিও বানানোর চেয়ে সেসব কাজে সময় ব্যয় করি।",
    },
    {
      question: "প্রশ্ন: আপনাদের কোর্স থেকে কি ভিডিও রেকর্ডিং করা যাবে?",
      answer:
        "উত্তর: আমরা কপিরাইট আইন মেনে চলি এবং আপনাদের সেই নিয়ম মেনে চলার অনুরোধ জানাই।",
    },
    {
      question: "প্রশ্ন: আমার কোর্স এ কি ভিডিও ডাউনলোড করতে পারব?",
      answer:
        "উত্তর: আপনি কোর্স কনটেন্ট সরাসরি আমাদের সাইট থেকে অ্যাক্সেস করতে পারবেন, ডাউনলোড করা যাবে না।",
    },
    {
      question: "প্রশ্ন: আপনি কোনো হোমওয়ার্ক সাবমিশন দেরি করলে কী হবে?",
      answer:
        "উত্তর: হোমওয়ার্ক সময় মতো সাবমিট করা ভালো অভ্যাস। দেরি হলে আমরা আপনাকে দ্বিতীয় সুযোগ দিতে পারি তবে নিয়ম অনুসারে পয়েন্ট হারানোর সম্ভাবনা থাকে।",
    },
    {
      question: "প্রশ্ন: কোর্স রিফান্ড পলিসি কি?",
      answer:
        "উত্তর: আমরা পরিষ্কার নীতিমালা মেনে চলি। আপনি কেনার আগে কোর্সের বিস্তারিত জেনে নিন। প্রয়োজন হলে আমাদের সাপোর্টে যোগাযোগ করুন।",
    },
    {
      question: "প্রশ্ন: আপনারা কোর্স কন্টেন্ট আপডেট করেন কিনা?",
      answer:
        "উত্তর: আমরা নিয়মিত কনটেন্ট আপডেট করি এবং নতুন ফিচার যুক্ত করি। তবে কিছু নির্দিষ্ট কোর্সে এটি প্রযোজ্য। বিস্তারিত জানতে আমাদের সাপোর্টে যোগাযোগ করুন।",
    },
    {
      question: "প্রশ্ন: আপনাদের কোর্স কিভাবে সাবস্ক্রাইব করব?",
      answer:
        "উত্তর: আমাদের ওয়েবসাইটে লগইন করুন এবং প্রয়োজনীয় কোর্স নির্বাচন করে সাবস্ক্রাইব করুন।",
    },
  ];

  return (
    <div className="bg-[#070d17] text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <nav className="text-sm text-white mb-4 ">
          <Link href="/" className="hover:underline">
            হোম
          </Link>{" "}
          &gt; <span className="text-red-500">প্রশ্নোত্তর</span>
        </nav>
        <h1 className="text-3xl font-bold text-red-500 text-center mb-6">প্রশ্নোত্তর</h1>

        <div className="space-y-8">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-white leading-relaxed shadow rounded-lg text-start "
            >
              <h2 className="text-xl font-semibold text-green-500">
                {faq.question}
              </h2>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
