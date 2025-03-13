import Link from "next/link";
import React from "react";
import { FaCode, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const TutorialsSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "C Programming",
      category: "Programming Basics",
      description:
        "সি প্রোগ্রামিংয়ের মৌলিক বিষয় শিখুন, যেমন সিনট্যাক্স, ফাংশন, এবং মেমোরি ম্যানেজমেন্ট।",
      status: "চলমান",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/HDR6TNC/Home-3.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "৬০ ঘন্টা",
      seats: "২০টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 2,
      title: "C++ Programming",
      category: "Object-Oriented Programming",
      description:
        "সি++-এর ক্লাস, অবজেক্ট, ইনহেরিটেন্স এবং উন্নত অ্যালগরিদম শিখুন।",
      status: "সমাপ্ত",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/N719F83/Home-4.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "৭০ ঘন্টা",
      seats: "২৫টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 3,
      title: "JavaScript",
      category: "Frontend Development",
      description:
        "জাভাস্ক্রিপ্টের মৌলিক ধারণা, DOM ম্যানিপুলেশন, এবং আধুনিক ES6+ বৈশিষ্ট্যগুলি শিখুন।",
      status: "বিরতিতে",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/LgTTYJc/Home-5.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "৮০ ঘন্টা",
      seats: "৩০টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 4,
      title: "TypeScript",
      category: "Frontend Development",
      description:
        "টাইপস্ক্রিপ্ট ব্যবহার করে স্কেলেবল এবং মেইনটেইনেবল প্রজেক্ট তৈরি করুন।",
      status: "চলমান",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/bbD9q7N/Home-11.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "৯০ ঘন্টা",
      seats: "১৫টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 5,
      title: "Node.js",
      category: "Backend Development",
      description:
        "নোড.জেএস-এর অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং, API তৈরি এবং স্কেলিং সম্পর্কে জানুন।",
      status: "চলমান",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/52DJzcg/Home-7.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "১০০ ঘন্টা",
      seats: "১৮টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 6,
      title: "Express.js",
      category: "Backend Development",
      description:
        "RESTful API এবং শক্তিশালী ব্যাকএন্ড তৈরি করতে এক্সপ্রেস.জেএস শিখুন।",
      status: "সমাপ্ত",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/CM5kMBb/Home-8.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      promo_code: "প্রোমো কোড",
      duration: "৭০ ঘন্টা",
      seats: "২০টি",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
    {
      id: 7,
      title: "React",
      category: "Frontend Development",
      description:
        "রিয়্যাক্ট হুকস, কনটেক্সট API এবং উন্নত কম্পোনেন্ট আর্কিটেকচার শিখুন।",
      status: "চলমান",
      teacher: "Jewel Mia",
      image: "https://i.ibb.co.com/6Jnq8pY/Home-6.png",
      batch: "১০ম ব্যাচ ভর্তি হোন",
      price: "৳৮,০০০",
      duration: "৮০ ঘন্টা",
      seats: "২২টি",
      promo_code: "প্রোমো কোড",
      live_classes: "৮৪ টি লাইভ ক্লাস",
      projects: "১৮ টি প্রজেক্টসমূহ",
      days_remaining: "৫০ দিন বাকি",
      pre_recorded_videos: "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
      job_support: "জব প্লেসমেন্ট সাপোর্ট",
      class_recording_lifetime_access: "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
      course_thumbnail: "Course Thumbnail",
      view_video: "ভিডিও দেখুন",
      batch_start_date: "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
      live_class_time: "📅 লাইভ ক্লাস: রাত ৯:০",
    },
  ];

  const categories = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "C Programming",
      totalCourses: "১",
    },
    {
      icon: <FaCode className="text-indigo-500" />,
      title: "C++",
      totalCourses: "১০",
    },
    {
      icon: <FaJsSquare className="text-yellow-500" />,
      title: "JavaScript",
      totalCourses: "১৫",
    },
    {
      icon: <FaCode className="text-blue-400" />,
      title: "TypeScript",
      totalCourses: "১২",
    },
    {
      icon: <FaReact className="text-cyan-500" />,
      title: "React",
      totalCourses: "১৪",
    },
    {
      icon: <FaCode className="text-teal-500" />,
      title: "Next.js",
      totalCourses: "৭",
    },
    {
      icon: <FaCode className="text-gray-600" />,
      title: "Express.js",
      totalCourses: "৬",
    },
    {
      icon: <FaNode className="text-green-600" />,
      title: "Node.js",
      totalCourses: "৯",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl text-center flex items-center gap-2 font-bold text-gray-800 mb-4">
              <span className="loading loading-infinity text-red-500 loading-lg"></span>{" "}
              আপকামিং লাইভ কোর্স
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-4 max-w-[90vw]">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md flex-shrink-0 ${
                    index === 0
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category.icon}
                  <div>
                    <span>{category.title}</span>
                    <br />
                    <span>👁️‍🗨️{category.totalCourses} কোর্স</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform transition-all duration-300 ease-in-out"
            >
              {/* Image Section */}
              <div
                className="relative h-48 bg-cover bg-center group"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-500 text-white py-1 rounded-full text-sm">
                      {course.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">
                      🕒 সময়কালঃ {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">
                      👥 আসন সংখ্যাঃ {course.seats}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">💰 কোর্স ফিঃ {course.price}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-sm">📚 {course.live_classes}</span>
                  </div>
                </div>

                {/* Batch Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    {course.batch_start_date}
                  </p>
                  <p className="text-sm text-gray-600">
                    {course.live_class_time}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <Link href={`/details/courseDetails/${course.id}`}>
                    <button className="w-full bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition duration-300">
                      বিস্তারিত দেখুন
                    </button>
                  </Link>
                  <button className="w-full mb-2 border-2 border-yellow-500 text-gray-800 py-1 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300">
                    ভর্তি হন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8 flex justify-center text-center">
          <Link href={"/routes/course"}>
            <button className="px-6 flex justify-center gap-2 items-center  bg-transparent transition duration-200 border rounded-md py-1 text-black  hover:bg-yellow-400">
              সব দেখুন <FaArrowTrendUp />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
