/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseProgressBar } from "./CourseProgressBar";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { getMyEnrollments } from "@/lib/enrollment";
import { Course } from "@/types/course";

interface Enrollment {
  _id: string;
  courses: Course[];
  amount: number;
  createdAt: string;
}

export default function CourseEnrolled() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const data = await getMyEnrollments();
      setEnrollments(data);
    } catch (error: any) {
      console.error("Enrollment fetch error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get instructor name
  const getInstructorName = (course: Course) => {
    return course.instructor?.name || "EduTech BD";
  };

  // Get unique courses from all enrollments
  const allCourses = Array.from(
    new Map(
      enrollments
        .flatMap((enrollment) => enrollment.courses)
        .filter((course): course is Course => Boolean(course))
        .map((course) => [course._id, course])
    ).values()
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="animate-spin text-sky-600" size={48} />
        <p className="ml-3 text-muted-foreground">Loading your courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            Error Loading Courses
          </h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button
            onClick={fetchEnrollments}
            className="rounded-full px-6 py-3 bg-sky-600 hover:bg-sky-700"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (allCourses.length === 0) {
    return (
      <div className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">
            No Courses Enrolled Yet
          </h2>
          <p className="text-muted-foreground mb-6">
            Start learning by enrolling in your first course!
          </p>
          <Link href="/courses">
            <Button className="rounded-full px-6 py-3 bg-sky-600 hover:bg-sky-700">
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
        course{allCourses.length !== 1 ? "s" : ""}
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
                src={
                  course.thumbnail ||
                  "https://i.ibb.co.com/nM8qXWfD/17538409-5870491.jpg"
                }
                alt={course.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-semibold">{course.title}</h2>

              <p className="text-lg font-medium text-muted-foreground">
                {getInstructorName(course)}
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

                <Link href={`/course/${course._id}`}>
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