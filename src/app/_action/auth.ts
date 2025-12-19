/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";

interface LoginResponse {
  success: boolean;
  message?: string;
  user?: any;
}

export async function loginAction(
  prevState: any,
  formData: FormData
): Promise<LoginResponse> {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email,password)

    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });
    console.log(response)

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result?.message || "Login failed",
      };
    }

    const { accessToken } = result.data;

    if (!accessToken) {
      return {
        success: false,
        message: "Server error: access token missing",
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return {
      success: true,
      message: "Logged in successfully",
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message:  "unexpected error occur" };
  }
}