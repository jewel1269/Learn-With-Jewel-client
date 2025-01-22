import Image from "next/image";
import Link from "next/link";
import React from "react";

// কোর্সের তথ্য
const courses = [
  {
    id: 1,
    title: "সি প্রোগ্রামিং",
    category: "প্রোগ্রামিং বেসিক্স",
    description:
      "সি প্রোগ্রামিংয়ের মৌলিক বিষয় শিখুন, যেমন সিনট্যাক্স, ফাংশন, এবং মেমোরি ম্যানেজমেন্ট।",
    status: "চলমান",
    teacher: "ব্রায়ান কের্নিঘান",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    id: 2,
    title: "সি++ প্রোগ্রামিং",
    category: "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং",
    description:
      "সি++-এর ক্লাস, অবজেক্ট, ইনহেরিটেন্স এবং উন্নত অ্যালগরিদম শিখুন।",
    status: "সমাপ্ত",
    teacher: "বজার্ন স্ট্রস্ট্রুপ",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055678.png",
  },
  {
    id: 3,
    title: "জাভাস্ক্রিপ্ট",
    category: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
    description:
      "জাভাস্ক্রিপ্টের মৌলিক ধারণা, DOM ম্যানিপুলেশন, এবং আধুনিক ES6+ বৈশিষ্ট্যগুলি শিখুন।",
    status: "বিরতিতে",
    teacher: "ডগলাস ক্রকফোর্ড",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    id: 4,
    title: "টাইপস্ক্রিপ্ট",
    category: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
    description:
      "টাইপস্ক্রিপ্ট ব্যবহার করে স্কেলেবল এবং মেইনটেইনেবল প্রজেক্ট তৈরি করুন।",
    status: "চলমান",
    teacher: "আন্ডার্স হেইলসবার্গ",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    id: 5,
    title: "নোড.জেএস",
    category: "ব্যাকএন্ড ডেভেলপমেন্ট",
    description:
      "নোড.জেএস-এর অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং, API তৈরি এবং স্কেলিং সম্পর্কে জানুন।",
    status: "চলমান",
    teacher: "রায়ান ডাল",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    id: 6,
    title: "এক্সপ্রেস.জেএস",
    category: "ব্যাকএন্ড ডেভেলপমেন্ট",
    description:
      "RESTful API এবং শক্তিশালী ব্যাকএন্ড তৈরি করতে এক্সপ্রেস.জেএস শিখুন।",
    status: "সমাপ্ত",
    teacher: "টিজে হোলোওয়াচুক",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    id: 7,
    title: "রিয়্যাক্ট",
    category: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
    description:
      "রিয়্যাক্ট হুকস, কনটেক্সট API এবং উন্নত কম্পোনেন্ট আর্কিটেকচার শিখুন।",
    status: "চলমান",
    teacher: "ড্যান আব্রামভ",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
  {
    id: 8,
    title: "নেক্সট.জেএস",
    category: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
    description: "নেক্সট.জেএস ব্যবহার করে আধুনিক ওয়েব অ্যাপ তৈরি করুন।",
    status: "সমাপ্ত",
    teacher: "ভার্সেল টিম",
    image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    id: 9,
    title: "রিয়্যাক্ট নেটিভ",
    category: "মোবাইল ডেভেলপমেন্ট",
    description:
      "রিয়্যাক্ট নেটিভ এবং এক্সপো দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি শিখুন।",
    status: "চলমান",
    teacher: "জর্ডান ওয়ালকে",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
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
    <div className="lg:px-16 py-8 bg-gray-50 min-h-screen">
      <main className="p-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          প্রিমিয়াম <span className="text-green-500">কোর্সসমূহ</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <article
              key={course.id}
              className="shadow-md border bg-white rounded-xl p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div>
                <div className="flex justify-center">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 h-40 w-64"
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${
                      statusColors[course.status]
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  {course.category}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {course.description}
                </p>
                <p className="text-xs text-gray-500">
                  শিক্ষক: <span className="font-medium">{course.teacher}</span>
                </p>
              </div>
              <Link href={`/details/courseDetails/${course.id}`}>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  aria-label={`${
                    course.status === "সমাপ্ত"
                      ? "পুরস্কার দাবি করুন"
                      : "কোর্স চালিয়ে যান"
                  } ${course.title}`}
                >
                  {course.status === "সমাপ্ত"
                    ? "পুরস্কার দাবি করুন"
                    : "চালিয়ে যান"}
                </button>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesGrid;
