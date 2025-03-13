import React, { useEffect, useState } from "react";

const FeaturesAndStats = () => {
  const [jobPlacement, setJobPlacement] = useState(0);
  const [learners, setLearners] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);
  const [liveCourses, setLiveCourses] = useState(0);

  const stats = React.useMemo(() => [
    { target: 100, setValue: setJobPlacement, label: "জব প্লেসমেন্ট" },
    { target: 500, setValue: setLearners, label: "লার্নার" },
    { target: 90, setValue: setCompletionRate, label: "কোর্স কম্প্লিশন রেট" },
    { target: 90, setValue: setLiveCourses, label: "লাইভ কোর্স" },
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      stats.forEach((stat) => {
        if (stat.setValue === setCompletionRate) {
          if (completionRate < stat.target) {
            stat.setValue((prev) => Math.min(prev + 20, stat.target));
          }
        } else {
          if (stat.setValue === setJobPlacement && jobPlacement < stat.target) {
            stat.setValue((prev) => Math.min(prev + 10, stat.target));
          } else if (stat.setValue === setLearners && learners < stat.target) {
            stat.setValue((prev) => Math.min(prev + 20, stat.target));
          } else if (
            stat.setValue === setLiveCourses &&
            liveCourses < stat.target
          ) {
            stat.setValue((prev) => Math.min(prev + 50, stat.target));
          }
        }
      });
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [jobPlacement, learners, completionRate, liveCourses, stats]);

  return (
    <section className=" py-10">
      {/* Features Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          কি কি পাচ্ছেন লাইভ কোর্সে
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { icon: "💼", title: "জবের জন্য ডেডিকেটেড জব প্লেসমেন্ট টিম" },
            { icon: "📄", title: "সিরিজ বিল্ডার ও এক্সপার্ট সিরিজ রিভিউ" },
            { icon: "🕒", title: "১৮ ঘণ্টার লাইভ সাপোর্ট নির্দিষ্ট কোর্সে" },
            { icon: "🏅", title: "প্রো ব্যাচ স্পেশাল সিরিজ ও জব সাপোর্ট" },
            { icon: "📚", title: "লাইভ টেস্টে নিজেকে যাচাইয়ের সুযোগ" },
            {
              icon: "✔️",
              title: "দিনে ৩ টি পর্যন্ত সাপোর্ট ক্লাস নির্দিষ্ট কোর্সে",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg border transition hover:translate-x-0.5 ease-in-out p-6 flex flex-col items-center justify-center"
            >
              <span className="text-4xl">{item.icon}</span>
              <p className="mt-4 text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-4 text-center">
          {[
            { stat: jobPlacement, label: "জব প্লেসমেন্ট" },
            { stat: learners, label: "লার্নার" },
            { stat: `${completionRate}%`, label: "কোর্স কম্প্লিশন রেট" },
            { stat: liveCourses, label: "লাইভ কোর্স" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg py-6 px-4 flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndStats;
