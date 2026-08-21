"use client";

import Image from "next/image";
import Link from "next/link";
import { CourseProgressBar } from "./CourseProgressBar";
import { mockCourses } from "@/data/mockData";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function CourseEnrolled() {
  const allCourses = mockCourses;

  return (
    <div className="w-full space-y-6 py-4">
      {/* Header Banner */}
      <div className="bg-indigo-600 dark:bg-indigo-950 rounded-lg p-6 md:p-8 text-white shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-cyan-300 text-xs font-semibold mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          Enrolled Learning Portal
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          My Enrolled Courses
        </h1>
        <p className="text-xs md:text-sm text-indigo-100 dark:text-gray-300 mt-1">
          You are currently enrolled in <strong className="text-white">{allCourses.length}</strong> active course{allCourses.length > 1 ? "s" : ""}.
        </p>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {allCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-64 h-40 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-3 w-full flex-1">
              <div>
                <div className="inline-block text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md mb-1">
                  {course.level} • {course.duration}
                </div>
                <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">{course.title}</h2>
                <p className="text-xs text-gray-500">
                  Instructor: <span className="font-semibold text-gray-700 dark:text-gray-300">{course.instructor?.name || "Instructor"}</span>
                </p>
              </div>

              {course.overview?.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {course.overview.description}
                </p>
              )}

              <CourseProgressBar />

              {/* Actions */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href={`/enrolled/${course._id}`}>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold transition cursor-pointer flex items-center gap-1.5">
                    <span>Continue Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>

                <Link href={`/courses/${course._id}`}>
                  <button className="px-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-semibold transition cursor-pointer">
                    Course Outline
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}