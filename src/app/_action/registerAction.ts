/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function registerAction(_: any, formData: FormData) {
  try {
    console.log("REGISTER ACTION CALLED");

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return { success: false, message: "All fields are required" };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
      cache: "no-store",
    });

    const text = await res.text();
    console.log("REGISTER RESPONSE:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return { success: false, message: "Invalid server response" };
    }

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: "Account created successfully",
    };
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);
    return { success: false, message: error.message };
  }
}
