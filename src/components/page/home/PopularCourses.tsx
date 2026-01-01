// components/page/home/PopularCourses.tsx
import Link from "next/link";
import CourseCard from "../course/PopularCourseCard";
import { Course } from "@/types/course";
import PopularCourseCard from "../course/PopularCourseCard";

interface Props {
  courses: Course[];
}

export default function PopularCourses({ courses }: Props) {
  return (
    <div className="p-6 mt-24 flex flex-col gap-6 lg:gap-10">
      {/* Header */}
      <div className="flex flex-col gap-6 mb-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Popular <span className="text-sky-500">Courses</span> Categories
        </h2>

        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Web Design",
              "Business",
              "Development",
              "Mobile App",
              "Accounting",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-400 
                  bg-gradient-to-r from-white to-sky-100 
                  hover:from-sky-100 hover:to-sky-300
                  transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          {/* More Courses */}
          <Link href="/courses">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
              More Courses →
            </button>
          </Link>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <PopularCourseCard key={index} {...course} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
