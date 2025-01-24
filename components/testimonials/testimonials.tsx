"use client"
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Faisal Azam Siddiqui",
    batch: "Full Stack Web Development with MERN Batch 1",
    text: "ওস্টাড-য়ের MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক সুফল একটি কোর্স। আমার প্রতিটি প্রিয়জন তাদের লাইফ ক্লাসে সুন্দর করার চেষ্টা করছে।",
    initials: "FA",
  },
  {
    name: "Shafayet Rana",
    batch: "UX/UI Batch 6",
    text: "Even though I come from a non-CS background, I felt that understanding data science would help me advance in my profession.",
    initials: "SR",
  },
  {
    name: "Md Galib Hasan",
    batch: "Data Science Certificate Program Batch 09",
    text: "The Data Science program delivered by Ostad is perfect for me. I would recommend it to anyone who might be interested to take the course.",
    initials: "MG",
  },
  {
    name: "Jahid Hossain",
    batch: "Full Stack Web Development with MERN Batch 2",
    text: "এই কোর্সটি হচ্ছে আমার লাইফের করা one of the best course।",
    initials: "JH",
  },
  {
    name: "Md Ashfaque Ul Hoque",
    batch: "UX/UI Batch 6",
    text: "সাজানো গোছানো এক্সপার্ট পার্টিসিপেশন।",
    initials: "MA",
  },
  {
    name: "Abu Hasan",
    batch: "UX/UI Batch 17",
    text: "ক্লাস আলহামদুলিল্লাহ অনেক ভালো।",
    initials: "AH",
  },
  {
    name: "Nayem Islam",
    batch: "Full Stack Web Development with MERN Batch 2",
    text: "MERN নিয়ে আমার প্রোগ্রেশন ১০০% ফুরফুরে হয়েছে।",
    initials: "NI",
  },
  {
    name: "ARM Salahuddin",
    batch: "Data Science Certificate Program",
    text: "The Data Science program delivered by Ostad is perfect for me.",
    initials: "AS",
  },
];

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}>
      <div className="text-black px-8 max-w-[1450px] lg:mt-10 mx-auto flex flex-col justify-center md:px-16">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-500">লার্নাররা</span> আমাদের সম্পর্কে যা
          ভাবেন
        </motion.h2>
        <motion.h1
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          লার্নাররা সর্বদাই লার্ন উইথ জুয়েল এর প্রতি তাদের ভালোবাসা প্রকাশ
          করেছেন
        </motion.h1>
        <div className="bg-gray-50 sm:px-6 lg:px-8">
          <motion.div
            className="mt-10 grid gap-6 lg:grid-cols-3 sm:grid-cols-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-8 flex mb-4 justify-center text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <button className="px-6 flex justify-center gap-2 items-center py-2 border text-black bg-transparent transition duration-200 rounded-xl hover:bg-yellow-400">
          সব দেখুন <FaArrowTrendUp />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
