import React from "react";

const FeaturesAndStats = () => {
  return (
    <section className="bg-gray-50 py-10">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">কি কি পাচ্ছেন লাইভ কোর্সে</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { icon: "💼", title: "জবের জন্য ডেডিকেটেড জব প্লেসমেন্ট টিম" },
            { icon: "📄", title: "সিরিজ বিল্ডার ও এক্সপার্ট সিরিজ রিভিউ" },
            { icon: "🕒", title: "১৮ ঘণ্টার লাইভ সাপোর্ট নির্দিষ্ট কোর্সে" },
            { icon: "🏅", title: "প্রো ব্যাচ স্পেশাল সিরিজ ও জব সাপোর্ট" },
            { icon: "📚", title: "লাইভ টেস্টে নিজেকে যাচাইয়ের সুযোগ" },
            { icon: "✔️", title: "দিনে ৩ টি পর্যন্ত সাপোর্ট ক্লাস নির্দিষ্ট কোর্সে" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <span className="text-4xl">{item.icon}</span>
              <p className="mt-4 text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-4 text-center">
          {[
            { stat: "৭,০০০+", label: "জব প্লেসমেন্ট" },
            { stat: "১৫,০০০+", label: "লার্নার" },
            { stat: "৯০%", label: "কোর্স কম্প্লিশন রেট" },
            { stat: "৪৬", label: "লাইভ কোর্স" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg py-6 px-4 flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndStats;
