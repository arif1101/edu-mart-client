// components/page/home/PopularCourses.tsx
import Link from "next/link";
import { Course } from "@/types/course";
import PopularCourseCard from "../course/PopularCourseCard";

interface Props {
  courses: Course[];
}

export default function PopularCourses({ courses }: Props) {
  // Show only first 6 courses
  const displayedCourses = courses.slice(0, 6);

  return (
    <section className="py-8 md:py-12 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular <span className="text-indigo-600 dark:text-cyan-400">Courses</span> Categories
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Top-rated courses handpicked by industry professionals
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/courses">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer">
              Explore More Courses →
            </button>
          </Link>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.length > 0 ? (
          displayedCourses.map((course) => {
            const totalLessons =
              course.curriculum?.reduce(
                (acc, section) => acc + section.contents.length,
                0
              ) ?? 0;

            return (
              <PopularCourseCard
                key={course._id}
                thumbnail={course.thumbnail}
                title={course.title}
                description={
                  course.overview?.description ?? "No description available"
                }
                videos={totalLessons}
                lessons={totalLessons}
                hours={course.duration}
                fees={course.price}
                rating={course.averageRating}
                // Pass the link to the course page
                link={`/courses/${course._id}`}
              />
            );
          })
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </section>
  );
}
