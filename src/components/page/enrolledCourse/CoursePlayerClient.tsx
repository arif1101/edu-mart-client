/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import CourseContent from "@/components/page/enrolledCourse/CourseContent";
import CourseHeader from "@/components/page/enrolledCourse/CourseHeader";
import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";
import { Loader2 } from "lucide-react";
import { Lesson, Section } from "@/types/course";
import { getEnrolledCourseWithSections } from "@/lib/course"; // ✅ Import server action

interface Course {
  _id: string;
  title: string;
  thumbnail: string;
  instructor: {
    name: string;
    photo: string;
  };
}

export default function CoursePlayerClient({
  courseId,
}: {
  courseId: string;
}) {
  const [course, setCourse] = useState<Course | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourseData();
  }, [courseId]);

  const fetchCourseData = async () => {
    try {
      const data = await getEnrolledCourseWithSections(courseId); // ✅ Use server action
      const { course, sections } = data;

      setCourse(course);
      setSections(sections);

      if (sections.length && sections[0].lessons.length) {
        setCurrentLesson(sections[0].lessons[0]);
      }
    } catch (err: any) {
      console.error("Course fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-sky-600" size={48} />
        <p className="ml-3 text-muted-foreground">Loading course...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-center text-red-600 text-xl mb-4">
          {error || "Course not found"}
        </p>
        <button
          onClick={fetchCourseData}
          className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  const allLessons = sections.flatMap((s) => s.lessons);

  const handleLessonSelect = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader course={course} />
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