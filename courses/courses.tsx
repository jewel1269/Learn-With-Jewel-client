import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaVideo } from "react-icons/fa";

// কোর্সের তথ্য
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
    id: 8,
    title: "Next.js",
    category: "Frontend Development",
    description: "নেক্সট.জেএস ব্যবহার করে আধুনিক ওয়েব অ্যাপ তৈরি করুন।",
    status: "সমাপ্ত",
    teacher: "Jewel Mia",
    image: "https://i.ibb.co.com/jrY9Yzf/Home-9.png",
    batch: "১০ম ব্যাচ ভর্তি হোন",
    price: "৳৮,০০০",
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
    id: 9,
    title: "React Native",
    category: "Mobile Development",
    description:
      "রিয়্যাক্ট নেটিভ এবং এক্সপো দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি শিখুন।",
    status: "চলমান",
    teacher: "Jewel Mia",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    batch: "১০ম ব্যাচ ভর্তি হোন",
    price: "৳৮,০০০",
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

// স্ট্যাটাস রঙ
const statusColors: Record<string, string> = {
  চলমান: "bg-blue-100 text-blue-800",
  সমাপ্ত: "bg-green-100 text-green-800",
  বিরতিতে: "bg-red-100 text-red-800",
};

const CoursesGrid = () => {
  return (
    <div className="flex justify-center lg:px-44">
      <div className="lg:px-16 py-8 bg-gray-50 flex flex-col justify-center min-h-screen w-full">
        <main className="p-6">
          <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
            প্রিমিয়াম <span className="text-green-500">কোর্সসমূহ</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course) => (
              <article
                key={course.id}
                className="shadow-md border bg-white rounded-xl hover:border hover:border-gray-400 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div>
                  <div className="flex justify-center">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 lg:h-40 h-20 w-full object-cover"
                    />
                  </div>
                  <div className="flex p-2 justify-between items-center mb-4">
                    <h2 className="lg:text-lg text-sm sm:text-xl font-bold">
                      {course.title}
                    </h2>
                    <span
                      className={`text-xs sm:text-sm px-3 py-1 rounded-full font-medium ${
                        statusColors[course.status]
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                  <h3 className="text-sm px-2 sm:text-base font-semibold text-gray-600 mb-2">
                    {course.category}
                  </h3>
                  <p className="text-xs px-2 sm:text-sm text-gray-700 lg:mb-4">
                    {course.description}
                  </p>
                  <p className="text-xs px-2 font-bold sm:text-sm text-gray-900">
                    শিক্ষক:{" "}
                    <span className="font-medium"> {course.teacher}</span>
                  </p>
                </div>
                <div className="px-2 p-2 mb-2">
                  <Link href={`/details/courseDetails/${course.id}`}>
                    <button
                      className="flex items-center gap-2 p-1  w-full justify-center text-black lg:text-lg border border-gray-300 bg-slate-100  text-center font-medium px-3 rounded-md hover:bg-gray-200 transition duration-200"
                      aria-label={`${
                        course.status === "সমাপ্ত" ? "সমাপ্ত" : "দেখুন"
                      } ${course.title}`}
                    >
                      <FaVideo className="text-sm text-center text-gray-600" />
                      <span className="text-sm">{course.status === "সমাপ্ত" ? "সমাপ্ত" : "দেখুন"}</span>
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursesGrid;
