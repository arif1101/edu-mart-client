export async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/course`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}
