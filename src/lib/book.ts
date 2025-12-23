export async function getBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/book`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}
