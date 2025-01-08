import Head from "next/head";
import Card from "./card";
import VideoEmbed from "./video";
import CardTwo from "./card2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Community Configuration</title>
      </Head>
      <main className="min-h-screen text-black">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row border border-gray-700 rounded-lg justify-between items-center p-5 gap-8 lg:gap-4 max-w-7xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-lg leading-relaxed">
              লার্ন উইথ জুয়েল ২০২৩ সালের 21মে - 27মে আয়োজন করেছিলো সর্বজনস্বীকৃত
              এবং প্রশংসিত ডেভেলোপার কনফারেন্স devConf 1.0. সেখানে চারশ জন
              শিক্ষার্থী সহ উপস্থিত ছিলেন কমিউনিটির প্রায় দেড়শ জনপ্রিয় এবং
              শ্রদ্ধেয় অতিথিবৃন্দ। সেই সাথে পুরো ইভেন্ট জুড়ে বাংলাদেশের প্রায় ৭০
              হাজারেরও বেশি ডেভেলপার ভাইরা অনলাইনে কানেক্টেড হয়েছিলেন।
            </h1>
            <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded-full hover:bg-blue-700">
              ওয়েবসাইট ভিজিট করুন
            </button>
          </div>

          <div className="lg:w-1/2">
            <Card
              title="devConf 1.0"
              description="লাস্ট ইভেন্ট মিস করেছেন? আমাদের ভিডিও দেখুন!"
              linkText="ভিডিওটি দেখুন"
              linkHref="https://youtu.be/hrOj7CZt3to?si=n3w6ZtIxVwsg4FLL"
            >
              <VideoEmbed />
            </Card>
          </div>
        </div>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardTwo
            title="টক উইথ জুয়েল"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjr67gLGIc-YEJW8QcuKvR8t142VTcOALqw&s"
            description="প্রোগ্রামিং এর বিভিন্ন সেক্টর সম্পর্কে অভিজ্ঞ সিনিয়র প্রোগ্রামার দের মতামত লার্নার দের কাছে পৌঁছে দেবার পাশাপাশি একটি সুন্দর ক্যারিয়ার গাইডলাইন দেবার জন্য লার্ন উইথ সুমিত থেকে আমরা আয়োজন করেছিলাম টক উইথ সুমিত নামের টেক টক শো।"
            linkText="বিস্তারিত পড়ুন"
            linkHref="#"
          />

          <CardTwo
            title="গ্র্যান্ড অ্যাড্ডা"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjr67gLGIc-YEJW8QcuKvR8t142VTcOALqw&s"
            description="কমিউনিটির সুষ্ঠু পরিবেশ বজায় রাখতে এবং কন্টেন্ট ক্রিয়েটরদের মধ্যে ভাতৃত্ব এবং সৌহার্দ্য ধরে রাখতে লার্ন উইথ সুমিত প্রথম বারের মতো আয়োজন করেছিল লাইভ গ্র্যান্ড টেক আড্ডা যেখানে উপস্থিত ছিলেন বাংলাদেশের জনপ্রিয় প্রোগ্রামিং কন্টেন্ট ক্রিয়েটররা।"
            linkText="বিস্তারিত পড়ুন"
            linkHref="#"
          />

          <CardTwo
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjr67gLGIc-YEJW8QcuKvR8t142VTcOALqw&s"
            title="VS Code থিম"
            description="বর্তমান সময়ে ওয়েব ডেভেলপার দের সবচেয়ে বেশি সময় কাটে VS Code এডিটরে। ডেভেলপার দের মনে সব সময় জায়গা করে নেবার জন্য লার্ন উইথ সুমিত লঞ্চ করেছে তাদের নিজস্ব থিম যেখানে ১০টি কালার ভ্যারিয়েন্ট আছে এবং প্রায় 36K+ ডাউনলোড হয়েছে!"
            linkText="বিস্তারিত পড়ুন"
            linkHref="#"
          />
        </div>
      </main>
    </>
  );
}
