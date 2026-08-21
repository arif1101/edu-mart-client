/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import CourseContent from "@/components/page/enrolledCourse/CourseContent";
import CourseHeader from "@/components/page/enrolledCourse/CourseHeader";
import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";
import { Lesson, Section } from "@/types/course";
import { mockCourses } from "@/data/mockData";

export default function CoursePlayerClient({
  courseId,
}: {
  courseId: string;
}) {
  const selectedCourse = mockCourses.find(c => c._id === courseId) || mockCourses[0];

  const courseData = {
    _id: selectedCourse._id,
    title: selectedCourse.title,
    thumbnail: selectedCourse.thumbnail,
    instructor: {
      name: selectedCourse.instructor.name,
      photo: selectedCourse.instructor.photo,
    },
  };

  const mockSections: Section[] = (selectedCourse.curriculum || []).map((curr, idx) => ({
    _id: curr._id,
    title: curr.title,
    order: idx + 1,
    lessons: curr.contents.map((title, lIdx) => ({
      _id: `les-${idx}-${lIdx}`,
      title,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      order: lIdx + 1,
      section: curr._id,
      isPreview: lIdx === 0,
    })),
  }));

  const [sections] = useState<Section[]>(mockSections);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    mockSections.length && mockSections[0].lessons.length ? mockSections[0].lessons[0] : null
  );

  const allLessons = sections.flatMap((s) => s.lessons);

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader course={courseData} />
      <div className="mx-auto max-w-7xl px-4 py-6 flex gap-6 flex-col lg:flex-row">
        {currentLesson && (
          <VideoPlayer lesson={currentLesson} allLessons={allLessons} />
        )}
        <CourseContent
          sections={sections}
          currentLessonId={currentLesson?._id}
          onLessonSelect={(lesson) => setCurrentLesson(lesson)}
        />
      </div>
    </div>
  );
}