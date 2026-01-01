"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseProgressBar } from "./CourseProgressBar";

export default function CourseEnrolled() {
  return (
    <div className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold">
        Welcome back{" "}
        <span className="font-bold text-sky-500">Arifur Rahman</span>, ready for
        your next lesson?
      </h1>

      <div className="h-[2px] bg-sky-500 mt-6 mb-10 w-32"></div>

      {/* Course Card */}
      <div className="border rounded-2xl shadow-sm hover:shadow-md transition p-6 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Thumbnail */}
        <div className="relative w-full md:w-[368px] h-[220px] flex-shrink-0">
          <Image
            src="https://i.ibb.co.com/nM8qXWfD/17538409-5870491.jpg"
            alt="Course thumbnail"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-semibold">
            Next Level Development
          </h2>

          <p className="text-lg font-medium text-muted-foreground">
            EduTech BD
          </p>

          <CourseProgressBar />

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/enrolled/11">
              <Button className="rounded-full px-6 py-6 text-base bg-sky-600 hover:bg-sky-700">
                Continue Course
              </Button>
            </Link>

            <Button
              variant="secondary"
              className="rounded-full px-6 py-6 text-base"
            >
              Course Outline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
