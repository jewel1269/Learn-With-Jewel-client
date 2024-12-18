import Image from "next/image";
import React from "react";
import wow from "@/images/41559-removebg-preview.png";

const testimonials = [
  {
    name: "Rafe Uddaraj Official",
    platform: "YouTube",
    comment:
      "dada bangladesh e emon creator ache ami jantam nah. vabtam traversy media, academind, neso academy, etc ei gular moto better quality kisu dite parbe nah bangladesh e...",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
  {
    name: "Md Shoharab PK",
    platform: "Facebook",
    comment:
      "Sotti dada apnar video te animation use korar jonno aro valo kore bujha jai...",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
  {
    name: "Tanvirul Islam",
    platform: "Facebook",
    comment:
      "দাদা আপনার ভিডিও আর অন্যান্য চ্যানেলের এর ভিডিও, বোঝানোর প্রসেস সম্পূর্ণ আলাদা।",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
  {
    name: "Shahidul Islam Zahid",
    platform: "Facebook",
    comment:
      "এক কথায় এই প্লে লিস্ট টি অসাধারণ। যে যে ২৭ মিনিটের ভিডিও টি ছিল ব্যাসিক...",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
  {
    name: "Md Sazzad Hossain",
    platform: "Facebook",
    comment:
      "Your Node.js videos have been very helpful to me. This is far better than any paid course...",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
  {
    name: "Cloud Fury",
    platform: "YouTube",
    comment:
      "Dear Sumit, I had to reach out with a massive appreciation and to say that I am in awe of your teaching...",
    profileImage: "https://via.placeholder.com/200", // Replace with the actual image URL
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
        <div className=" lg:-mt-72 lg:mb-8">
      <div className="flex justify-center">
        <Image
          src={wow}
          alt="Learn with Jewel"
          width={250}
          height={250}
          className="rounded-lg mb-6"
        />
      </div>
      <div className="text-black px-8 max-w-[1450px] mx-auto flex flex-col justify-center md:px-16 ">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          <span className="text-green-500">লার্নাররা</span> আমাদের সম্পর্কে যা
          ভাবেন
        </h2>
        <h1 className="text-center mb-16">
          লার্নাররা সর্বদাই লার্ন উইথ জুয়েল এর প্রতি তাদের ভালোবাসা প্রকাশ
          করেছেন
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white- rounded-lg shadow-md border border-gray-700 flex flex-col items-center"
            >
              <Image
                src={testimonial.profileImage}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full mb-4 border-2 border-gray-600"
              />
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
              <h1 className="text-sm text-black mb-2">
                commented on {testimonial.platform}
              </h1>
              <h1 className="text-gray-800 text-center">{testimonial.comment}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center  ">
        <button className="text-red-500 bg-slate-900 border-transparent  transition duration-300 ease-in-out hover:transition border-black p-1 rounded-2xl px-6 mt-5 hover:bg-green-500 hover:text-black">
          See More
        </button>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
