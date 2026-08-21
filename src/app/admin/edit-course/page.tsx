/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { mockCourses } from "@/data/mockData";

export default function EditCoursePage() {
  const [courses, setCourses] = useState<any[]>(mockCourses);

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

  const handleDelete = (courseId: string) => {
    setCourses((prev) => prev.filter((course) => (course._id || course.id) !== courseId));
    toast.success("Course deleted successfully (UI Mode)");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Courses</h1>

      {courses.map((course) => {
        const id = course._id || course.id;
        return (
          <div
            key={id}
            className="border p-4 flex items-center justify-between rounded bg-white"
          >
            <div>
              <h3 className="font-semibold">{course.title}</h3>
              <Link
                href={`/admin/course/${id}/sections`}
                className="text-blue-600 text-sm hover:underline"
              >
                Manage Sections →
              </Link>
            </div>

            <button
              onClick={() => confirmDelete(id)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 cursor-pointer"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
