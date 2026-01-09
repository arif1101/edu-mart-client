"use server";

import { cookies } from "next/headers";

// Public courses (no auth needed)
export async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

// Single course details (no auth needed)
export async function getSingleCourse(id: string) {
  console.log("--------checking for single course-------:", id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`,
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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${courseId}/full`,
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

// Mock data - can be removed when real API is ready
export async function getCoursePlayerData(courseId: string) {
  const sections = [
    {
      _id: "694ea0344cce9aacfb541abf",
      title: "JavaScript Basics",
      order: 0,
    },
  ];

  const lessons = [
    {
      _id: "694ea4dabbb3d5db7cbf5812",
      section: "694ea0344cce9aacfb541abf",
      title: "JavaScript Introduction",
      videoUrl: "https://www.youtube.com/embed/xpP5L1NuMQU?si=3RAXrQrzoP_Glktn",
      order: 1,
      isPreview: true,
    },
  ];

  return { sections, lessons };
}