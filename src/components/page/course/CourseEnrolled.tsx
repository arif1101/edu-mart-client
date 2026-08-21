/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseProgressBar } from "./CourseProgressBar";
import { mockCourses } from "@/data/mockData";

export default function CourseEnrolled() {
  const allCourses = mockCourses;

  return (
    <div className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold">
        Welcome back, ready for your next lesson?
      </h1>

      <div className="h-[2px] bg-sky-500 mt-6 mb-10 w-32"></div>

      {/* Total Courses Count */}
      <p className="text-lg text-muted-foreground mb-6">
        You have enrolled in{" "}
        <span className="font-bold text-sky-600">{allCourses.length}</span>{" "}
        courses
      </p>

      {/* Courses Grid */}
      <div className="space-y-8">
        {allCourses.map((course) => (
          <div
            key={course._id}
            className="border rounded-2xl shadow-sm hover:shadow-md transition p-6 md:p-8 flex flex-col md:flex-row gap-8"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-[368px] h-[220px] flex-shrink-0">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-semibold">{course.title}</h2>

              <p className="text-lg font-medium text-muted-foreground">
                {course.instructor?.name || "Instructor"}
              </p>

              {course.overview?.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.overview.description}
                </p>
              )}

              <CourseProgressBar />

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={`/enrolled/${course._id}`}>
                  <Button className="rounded-full px-6 py-6 text-base bg-sky-600 hover:bg-sky-700">
                    Continue Course
                  </Button>
                </Link>

                <Link href={`/courses/${course._id}`}>
                  <Button
                    variant="secondary"
                    className="rounded-full px-6 py-6 text-base"
                  >
                    Course Outline
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}