import { ArrowRight } from "lucide-react";

export default function PopularTopics() {
  const topics = [
    {
      id: 1,
      title: "Lifestyles",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/lifestyles.svg",
      description: "Lorem ipsum dolor sit amet consectet and gossip.",
    },
    {
      id: 2,
      title: "Sales & Marketing",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/sales-marketing.svg",
      description: "Lorem ipsum dolor sit amet consectet and gossip.",
    },
    {
      id: 3,
      title: "Business Analysis",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/business-analysis.svg",
      description: "Lorem ipsum dolor sit amet consectet and gossip.",
    },
    {
      id: 4,
      title: "Creativity",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/creativity.svg",
      description: "Lorem ipsum dolor sit amet consectet and gossip.",
    },
    {
      id: 5,
      title: "Data Science",
      courses: "11 Courses",
      image: "https://lms.factoryze.tech/demotopics/data-science.svg",
      description: "Lorem ipsum dolor sit amet consectet and gossip.",
    },
  ];

  return (
    <section className="mt-20 flex flex-col gap-12 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Popular <span className="text-sky-500">Topics To</span> E-Learner
        </h1>

        <button className="flex items-center gap-2 w-fit px-6 h-11 bg-sky-500 text-white font-medium rounded-3xl hover:bg-sky-600 transition">
          Explore Our Courses
          <ArrowRight className="mt-0.5" />
        </button>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto">
        {topics.map((topic) => (
          <div key={topic.id} className="flex flex-col gap-4">
            <div className="p-6 bg-white rounded-lg shadow border border-sky-200 hover:border-transparent flex flex-col items-center text-center relative group transition-all duration-500 h-[260px]">
              <img
                className="w-16 h-16 transition-transform duration-500 ease-out group-hover:scale-150"
                src={topic.image}
                alt={topic.title}
              />

              <p className="text-gray-600 transition-all duration-500 group-hover:opacity-0">
                {topic.description}
              </p>

              <p className="absolute bottom-8 text-xl text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {topic.courses}
              </p>
            </div>

            <h2 className="text-xl font-bold text-center">{topic.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
