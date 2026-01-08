export const addCourseToCart = async (courseId: string) => {
  console.log()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/course/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ courseId }),
    }
  );
  console.log("--------res ourse cart-------", res)

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
};


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
