// lib/course.ts
"use server";

import { CourseFormType } from "@/schema/course.schema";
import { cookies } from "next/headers";

// Public courses (no auth needed)
export async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`, { // ✅ Add parentheses
    cache: "no-store",
  });

  console.log("----------courses11-------------", res)

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

// Single course details (no auth needed)
export async function getSingleCourse(id: string) {
  console.log("--------checking for single course-------:", id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`, // ✅ Correct
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }

  return res.json();
}

// Enrolled course with sections and lessons (auth required)
export async function getEnrolledCourseWithSections(courseId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${courseId}/full`, // ✅ Correct
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const response = await res.json();
  return response.data;
}


export async function createCourse(data: CourseFormType) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Course creation failed");
  }

  return res.json();
}


export async function deleteCourse(courseId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${courseId}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Delete failed");
  }

  return res.json();
}