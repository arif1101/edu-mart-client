export async function addCourseToCart(courseId: string) {
    console.log("-------------", courseId)// i get here id
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/course/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 🔥 THIS IS THE KEY
      body: JSON.stringify({ courseId }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to add to cart");
  }

  return res.json();
}

export async function removeCourseFromCart(courseId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/course/remove/${courseId}`,
    {
      method: "DELETE",
      credentials: "include", // send httpOnly cookie
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to remove course from cart");
  }

  return res.json();
}
