export async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

// course.ts
export async function getSingleCourse(id: string) {
  console.log("--------checking for sngle course-------:", id)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }

  return res.json();
}


// lib/course.ts

export async function getCoursePlayerData(courseId: string) {
  // replace with real DB/API later
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
