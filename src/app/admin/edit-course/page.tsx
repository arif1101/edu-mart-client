/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EditCoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data.data || []));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Courses</h1>

      {courses.map((course: any) => (
        <div key={course._id} className="border p-4">
          <h3 className="font-semibold">{course.title}</h3>

          <Link
            href={`/admin/course/${course._id}/sections`}
            className="text-blue-600"
          >
            Manage Sections →
          </Link>
        </div>
      ))}
    </div>
  );
}
