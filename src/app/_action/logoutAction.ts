"use server";

import { cookies } from "next/headers";

interface LogoutResponse {
  success: boolean;
  message: string;
}

export async function logoutAction(): Promise<LogoutResponse> {
  try {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0, // ⬅️ instantly expires the cookie
    });

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    console.error("Logout error:", error);
    return {
      success: false,
      message: "Logout failed",
    };
  }
}
