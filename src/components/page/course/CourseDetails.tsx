/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import CourseTab from "@/components/ui/courseTab";
import {
  CheckCircle,
  Clock,
  Network,
  Play,
  Timer,
  User,
  Video,
} from "lucide-react";
import { useState } from "react";

type Props = {
  course: any;
};

export default function CourseDetails({ course }: Props) {
  const [showModal, setShowModal] = useState(false);
  const thumbnail = course?.thumbnail;
  console.log("-----course details--------",course)

  return (
    <div className="pt-6 container mx-auto">
      <div>
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2">
            <User />
            <h3>8 student enroll</h3>
          </div>
          <div className="flex items-center gap-2">
            <Clock />
            <h3>Last update 4/23/2025</h3>
          </div>
          <div className="flex items-center gap-2">
            <Network />
            <h3 className="text-purple-500 font-bold">{course.level}</h3>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex gap-4 mb-10">
          <div className="w-12 rounded-full">
            <img
              className="rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div>
            <h1 className="text-[16px] font-bold">Arif</h1>
            <p className="text-[14px]">Instructor</p>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left */}
          <div className="w-2/3">
            <CourseTab
              overview={course?.overview ?? ""}
              curriculum={
                Array.isArray(course?.curriculum) ? course.curriculum : []
              }
              instructors={
                Array.isArray(course?.instructors) ? course.instructors : []
              }
            />
          </div>

          {/* Right */}
          <div className="w-1/3 sticky top-6 shadow-md bg-white dark:bg-black rounded-xl p-6 border border-blue-500">
            <div
              className="relative h-48 flex items-center justify-center cursor-pointer rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnail})` }}
              onClick={() => setShowModal(true)}
            >
              <Play className="text-4xl z-10" />
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold mb-6">{course?.price}</div>

              <Button className="w-full mb-4 bg-sky-500 hover:bg-sky-600">
                Enroll Now
              </Button>

              <div className="space-y-2 text-base font-semibold">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  <span>29.58 hours on-demand video</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>44 lectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-xl font-bold"
              >
                ×
              </button>

              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
