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
    <div className="mt-25 flex flex-col gap-12">
      {/* title */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Popular <span className="text-sky-500">Topics To</span> E-Learner
        </h1>

        <div className="flex items-center justify-center gap-1 w-56.5 bg-sky-500 text-white text-base font-medium h-11 rounded-3xl hover:bg-sky-600">
          <button>Explore Our Courses</button>
          <ArrowRight className="text-xl mt-1" />
        </div>
      </div>

      <div className="md:flex gap-6 mx-auto">
        {topics.map((topic) => (
          <div key={topic.id} className="w-57.5 h-78.5 flex flex-col gap-4">
            <div className="p-6 bg-white rounded-lg shadow border border-sky-200 hover:border-none flex flex-col items-center text-center h-65.25 w-full relative group transition-all duration-500 hover:justify-center gap-8">
              <img
                className="w-16 h-16 transition-transform duration-500 ease-out group-hover:scale-150"
                src={topic.image}
                alt={topic.title}
              />

              <p className="text-gray-600 transition-opacity duration-500 group-hover:opacity-0 group-hover:hidden">
                {topic.description}
              </p>

              <p className="text-xl text-blue-500 font-bold opacity-0 hidden group-hover:opacity-100 group-hover:block transition-opacity duration-700 delay-200">
                {topic.courses}
              </p>
            </div>

            <h2 className="text-xl font-bold text-center">{topic.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
