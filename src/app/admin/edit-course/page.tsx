/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { deleteCourse } from "@/lib/course";

export default function EditCoursePage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCourses(data.data || []))
      .catch(() => toast.error("Failed to load courses"));
  }, []);

  const confirmDelete = (courseId: string) => {
    toast("Delete this course?", {
      description: "This will also delete all sections and lessons.",
      action: {
        label: "Delete",
        onClick: () => handleDelete(courseId),
      },
      cancel: {
        label: "Cancel",
        onClick: () => {},
      },
    });
  };

const handleDelete = async (courseId: string) => {
  if (loadingId) return;

  setLoadingId(courseId);
  const toastId = toast.loading("Deleting course...");

  try {
    await deleteCourse(courseId);

    setCourses((prev) =>
      prev.filter((course) => course._id !== courseId)
    );

    toast.success("Course deleted successfully", { id: toastId });
  } catch (error: any) {
    toast.error(error.message || "Something went wrong", { id: toastId });
  } finally {
    setLoadingId(null);
  }
};


  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Courses</h1>

      {courses.map((course) => (
        <div
          key={course._id}
          className="border p-4 flex items-center justify-between"
        >
          <div>
            <h3 className="font-semibold">{course.title}</h3>
            <Link
              href={`/admin/course/${course._id}/sections`}
              className="text-blue-600 text-sm"
            >
              Manage Sections →
            </Link>
          </div>

          <button
            onClick={() => confirmDelete(course._id)}
            disabled={loadingId === course._id}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 disabled:opacity-50"
          >
            {loadingId === course._id ? "Deleting..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
}
