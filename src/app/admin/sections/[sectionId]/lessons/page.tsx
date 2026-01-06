/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LessonFormType, LessonZodSchema } from "@/schema/lesson.schema";

export default function LessonsPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [lessons, setLessons] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LessonFormType>({
    resolver: zodResolver(LessonZodSchema),
    defaultValues: {
      section: sectionId,
      title: "",
      videoUrl: "",
      order: 0,
      isPreview: false,
    },
  });

  /**
   * Load lessons safely inside useEffect
   * (React-recommended pattern)
   */
  useEffect(() => {
    if (!sectionId) return;

    const fetchLessons = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/lessons/section/${sectionId}`
        );

        const data = await res.json();
        setLessons(data.data || []);
      } catch {
        toast.error("Failed to load lessons");
      }
    };

    fetchLessons();

    // keep form sectionId in sync
    reset((prev) => ({
      ...prev,
      section: sectionId,
    }));
  }, [sectionId, reset]);

  /**
   * Create lesson
   */
  const onSubmit = async (data: LessonFormType) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/lessons/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            section: sectionId,
            order: lessons.length + 1,
          }),
        }
      );

      if (!res.ok) {
        toast.error("Failed to add lesson");
        return;
      }

      toast.success("Lesson added successfully");

      reset({
        section: sectionId,
        title: "",
        videoUrl: "",
        order: 0,
        isPreview: false,
      });

      // reload lessons
      const refresh = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/lessons/section/${sectionId}`
      );
      const refreshedData = await refresh.json();
      setLessons(refreshedData.data || []);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Lessons</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("title")}
          placeholder="Lesson title"
          className="border p-2 w-full"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <input
          {...register("videoUrl")}
          placeholder="Video URL"
          className="border p-2 w-full"
        />
        {errors.videoUrl && (
          <p className="text-red-500 text-sm">{errors.videoUrl.message}</p>
        )}

        <input
          type="number"
          {...register("order", { valueAsNumber: true })}
          placeholder="Order"
          className="border p-2 w-full"
        />
        {errors.order && (
          <p className="text-red-500 text-sm">{errors.order.message}</p>
        )}

        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("isPreview")} />
          Preview Lesson
        </label>

        <button type="submit" className="bg-black text-white p-2 w-full">
          Add Lesson
        </button>
      </form>

      {/* LESSON LIST */}
      <div className="space-y-2">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border p-3">
            <p className="font-semibold">{lesson.title}</p>
            {lesson.isPreview && (
              <span className="text-sm text-green-600">Preview</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
