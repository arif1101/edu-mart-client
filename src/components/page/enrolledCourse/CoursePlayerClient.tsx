/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import CourseContent from "@/components/page/enrolledCourse/CourseContent";
import CourseHeader from "@/components/page/enrolledCourse/CourseHeader";
import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";
import { Loader2 } from "lucide-react";

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  order: number;
  section: string;
  isPreview: boolean;
}

interface Section {
  _id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

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

  console.log("------------", courseId)

  useEffect(() => {
    fetchCourseData();
  }, [courseId]);

  const fetchCourseData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/courses/${courseId}/full`,
        { credentials: "include" }
      );

      if (!res.ok) throw new Error("Failed to fetch course data");

      const response = await res.json();
      const { course, sections } = response.data;

      setCourse(course);
      setSections(sections);

      if (sections.length && sections[0].lessons.length) {
        setCurrentLesson(sections[0].lessons[0]);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-sky-600" size={48} />
      </div>
    );
  }

  if (error || !course) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  const allLessons = sections.flatMap((s) => s.lessons);

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
          onLessonSelect={setCurrentLesson}
        />
      </div>
    </div>
  );
}
