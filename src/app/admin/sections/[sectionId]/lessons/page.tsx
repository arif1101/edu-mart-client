/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LessonFormType, LessonZodSchema } from "@/schema/lesson.schema";

export default function LessonsPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [lessons, setLessons] = useState<any[]>([
    { _id: "les-1", title: "Welcome & Setup", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", isPreview: true },
    { _id: "les-2", title: "Project Structure", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", isPreview: false },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LessonFormType>({
    resolver: zodResolver(LessonZodSchema),
    defaultValues: {
      section: sectionId || "",
      title: "",
      videoUrl: "",
      order: 0,
      isPreview: false,
    },
  });

  const onSubmit = (data: LessonFormType) => {
    const newLesson = {
      _id: `les-${Date.now()}`,
      title: data.title,
      videoUrl: data.videoUrl,
      isPreview: data.isPreview,
    };
    setLessons([...lessons, newLesson]);
    toast.success("Lesson added successfully (UI Mode)");
    reset({
      section: sectionId || "",
      title: "",
      videoUrl: "",
      order: 0,
      isPreview: false,
    });
  };

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Lessons</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("title")}
          placeholder="Lesson title"
          className="border p-2 w-full rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <input
          {...register("videoUrl")}
          placeholder="Video URL"
          className="border p-2 w-full rounded"
        />
        {errors.videoUrl && (
          <p className="text-red-500 text-sm">{errors.videoUrl.message}</p>
        )}

        <input
          type="number"
          {...register("order", { valueAsNumber: true })}
          placeholder="Order"
          className="border p-2 w-full rounded"
        />
        {errors.order && (
          <p className="text-red-500 text-sm">{errors.order.message}</p>
        )}

        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("isPreview")} />
          Preview Lesson
        </label>

        <button type="submit" className="bg-black text-white p-2 w-full rounded hover:bg-gray-800 cursor-pointer">
          Add Lesson
        </button>
      </form>

      {/* LESSON LIST */}
      <div className="space-y-2">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border p-3 rounded bg-white flex justify-between items-center">
            <p className="font-semibold">{lesson.title}</p>
            {lesson.isPreview && (
              <span className="text-sm text-green-600 font-medium">Preview</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
