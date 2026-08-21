import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PopularTopics() {
  const topics = [
    {
      id: 1,
      title: "Lifestyles",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/lifestyles.svg",
      description: "Explore courses on health, fitness, personal growth and modern living.",
    },
    {
      id: 2,
      title: "Sales & Marketing",
      courses: "15 Courses",
      image: "https://lms.factoryze.tech/demotopics/sales-marketing.svg",
      description: "Master digital marketing, sales strategies, and modern brand building.",
    },
    {
      id: 3,
      title: "Business Analysis",
      courses: "9 Courses",
      image: "https://lms.factoryze.tech/demotopics/business-analysis.svg",
      description: "Learn financial modeling, analytics, and business intelligence.",
    },
    {
      id: 4,
      title: "Creativity",
      courses: "14 Courses",
      image: "https://lms.factoryze.tech/demotopics/creativity.svg",
      description: "Unlock UI/UX design, graphic creation, motion graphics, and video.",
    },
    {
      id: 5,
      title: "Data Science",
      courses: "20 Courses",
      image: "https://lms.factoryze.tech/demotopics/data-science.svg",
      description: "Harness AI, Python, data analytics, and machine learning models.",
    },
  ];

  return (
    <section className="py-8 md:py-12 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular <span className="text-indigo-600 dark:text-cyan-400">Topics To</span> Explore
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Pick from our top trending learning categories
          </p>
        </div>

        <Link href="/courses">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer">
            <span>Explore All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {topics.map((topic) => (
          <div key={topic.id} className="flex flex-col gap-3 group">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 shadow-xs flex flex-col items-center text-center relative transition duration-300 min-h-[220px]">
              <img
                className="w-14 h-14 mb-3 transition-transform duration-300 group-hover:scale-110"
                src={topic.image}
                alt={topic.title}
              />

              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {topic.description}
              </p>

              <span className="mt-auto text-xs font-bold text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                {topic.courses}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-center text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition">
              {topic.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
