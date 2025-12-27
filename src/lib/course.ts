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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }

  return res.json();
}
