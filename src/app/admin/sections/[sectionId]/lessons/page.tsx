"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function LessonsPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [lessons, setLessons] = useState([]);

  const loadLessons = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/lessons/section/${sectionId}`
    );
    const data = await res.json();
    setLessons(data.data || []);
  };

  useEffect(() => {
    loadLessons();
  }, []);

  const addLesson = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/lessons/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionId,
          title,
          videoUrl,
          order: lessons.length + 1,
        }),
      }
    );

    if (!res.ok) return toast.error("Failed to add lesson");

    toast.success("Lesson added");
    setTitle("");
    setVideoUrl("");
    loadLessons();
  };

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Lessons</h2>

      <input
        placeholder="Lesson title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Video URL"
        className="border p-2 w-full"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <button className="bg-black text-white p-2 w-full" onClick={addLesson}>
        Add Lesson
      </button>

      {lessons.map((lesson: any) => (
        <div key={lesson._id} className="border p-3">
          {lesson.title}
        </div>
      ))}
    </div>
  );
}
