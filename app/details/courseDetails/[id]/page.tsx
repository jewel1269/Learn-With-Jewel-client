import CourseFeatures from "@/courses/CourseFeatures/courseFeatures";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const courses = [
  {
    "id": 1,
    "title": "C Programming",
    "category": "Programming Basics",
    "description": "সি প্রোগ্রামিংয়ের মৌলিক বিষয় শিখুন, যেমন সিনট্যাক্স, ফাংশন, এবং মেমোরি ম্যানেজমেন্ট।",
    "status": "চলমান",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/HDR6TNC/Home-3.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 2,
    "title": "C++ Programming",
    "category": "Object-Oriented Programming",
    "description": "সি++-এর ক্লাস, অবজেক্ট, ইনহেরিটেন্স এবং উন্নত অ্যালগরিদম শিখুন।",
    "status": "সমাপ্ত",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/N719F83/Home-4.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 3,
    "title": "JavaScript",
    "category": "Frontend Development",
    "description": "জাভাস্ক্রিপ্টের মৌলিক ধারণা, DOM ম্যানিপুলেশন, এবং আধুনিক ES6+ বৈশিষ্ট্যগুলি শিখুন।",
    "status": "বিরতিতে",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/LgTTYJc/Home-5.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 4,
    "title": "TypeScript",
    "category": "Frontend Development",
    "description": "টাইপস্ক্রিপ্ট ব্যবহার করে স্কেলেবল এবং মেইনটেইনেবল প্রজেক্ট তৈরি করুন।",
    "status": "চলমান",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/bbD9q7N/Home-11.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 5,
    "title": "Node.js",
    "category": "Backend Development",
    "description": "নোড.জেএস-এর অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং, API তৈরি এবং স্কেলিং সম্পর্কে জানুন।",
    "status": "চলমান",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/52DJzcg/Home-7.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 6,
    "title": "Express.js",
    "category": "Backend Development",
    "description": "RESTful API এবং শক্তিশালী ব্যাকএন্ড তৈরি করতে এক্সপ্রেস.জেএস শিখুন।",
    "status": "সমাপ্ত",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/CM5kMBb/Home-8.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 7,
    "title": "React",
    "category": "Frontend Development",
    "description": "রিয়্যাক্ট হুকস, কনটেক্সট API এবং উন্নত কম্পোনেন্ট আর্কিটেকচার শিখুন।",
    "status": "চলমান",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/6Jnq8pY/Home-6.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 8,
    "title": "Next.js",
    "category": "Frontend Development",
    "description": "নেক্সট.জেএস ব্যবহার করে আধুনিক ওয়েব অ্যাপ তৈরি করুন।",
    "status": "সমাপ্ত",
    "teacher": "Jewel Mia",
    "image": "https://i.ibb.co.com/jrY9Yzf/Home-9.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  },
  {
    "id": 9,
    "title": "React Native",
    "category": "Mobile Development",
    "description": "রিয়্যাক্ট নেটিভ এবং এক্সপো দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি শিখুন।",
    "status": "চলমান",
    "teacher": "Jewel Mia",
    "image": "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    "batch": "১০ম ব্যাচ ভর্তি হোন",
    "price": "৮,০০০",
    "promo_code": "প্রোমো কোড",
    "live_classes": "৮৪ টি লাইভ ক্লাস",
    "projects": "১৮ টি প্রজেক্টসমূহ",
    "days_remaining": "৫০ দিন বাকি",
    "pre_recorded_videos": "৪৭৮ টি প্রি রেকর্ডেড ভিডিও",
    "job_support": "জব প্লেসমেন্ট সাপোর্ট",
    "class_recording_lifetime_access": "ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস",
    "course_thumbnail": "Course Thumbnail",
    "view_video": "ভিডিও দেখুন",
    "batch_start_date": "📅 ব্যাচ শুরু শুক্রবার ২৮ ফেব্রুয়ারি",
    "live_class_time": "📅 লাইভ ক্লাস: রাত ৯:০"
  }
]

const CourseDetails = ({params}) => {

  const course = courses.find(course => course.id === parseInt(params.id)); 
  console.log(course);

  if (!course) {
    return <p>Course not found</p>;
  }
     

  return (
    <div className=" bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto border border-gray-400 lg:p-3  rounded-lg shadow-md overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/3 p-6">
            {/* Badge */}
            <div className="bg-red-200 text-red-700 text-xs font-bold px-3 py-1 rounded-full inline-block">
              লাইভ কোর্স
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold mt-4 text-gray-800">
             {course.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center mt-3">
              <span className="text-green-600 text-lg font-bold">4.9</span>
              <span className="text-yellow-500 ml-2 text-lg">★★★★★</span>
              <span className="text-gray-500 text-sm ml-3">(293 Ratings)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
             {course.description}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href={"/routes/payment"}>
                <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-600">
                  {course.batch}
                </button>
              </Link>
              <span className="text-2xl font-bold text-gray-700">
                <span className="text-2xl font-extrabold">৳</span>{course.price}
              </span>
              <span className="text-sm text-gray-600">প্রোমো কোড</span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mt-6">
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
                {course.live_classes}
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
                {course.projects}
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
                ৫০ দিন বাকি
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
                {course.pre_recorded_videos}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-start items-center mt-4">
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
               {course.job_support}
              </div>
              <div className="border border-gray-300 bg-gray-50 px-4 py-2 hover:rounded-xl hover:bg-gray-200 rounded text-gray-700">
                {course.class_recording_lifetime_access}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 relative h-56 rounded-xl lg:h-auto">
            <Image
              fill
              src={course.image}
              alt="Course Thumbnail"
              className="w-full h-full rounded-xl bg-cover"
            />
   
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-5">
          <div className="border border-gray-300 px-4 hover:rounded-xl hover:bg-gray-200 py-2 rounded text-gray-700">
             {course.batch_start_date}
          </div>
          <div className="border border-gray-300 px-4 hover:rounded-xl hover:bg-gray-200 py-2 rounded text-gray-700">
           {course.live_class_time}
          </div>
          <div className="border border-gray-300 px-4 hover:rounded-xl hover:bg-gray-200 py-2 rounded text-gray-700">
            {course.days_remaining}
          </div>
          <div className="border border-gray-300 px-4 hover:rounded-xl hover:bg-gray-200 py-2 rounded text-gray-700">
            📚 সিট বাকি: ৬২ টি
          </div>
          <div className="border border-gray-300 px-4 hover:rounded-xl hover:bg-gray-200 py-2 rounded text-gray-700">
            ✅ ভর্তি চলছে: ১০ম ব্যাচ
          </div>
          <Link href={"/routes/layout"}>
            <div className="border border-red-500 font-bold hover:rounded-xl hover:bg-gray-200 px-4 py-2 rounded text-gray-700">
              ✅ কোর্স প্ল্যান দেখুন
            </div>
          </Link>
        </div>
      </div>
      <CourseFeatures />
    </div>
  );
};

export default CourseDetails;
