/* eslint-disable @typescript-eslint/no-explicit-any */


"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateUserProfile(payload: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  // Remove empty password
  if (!payload.password) {
    delete payload.password;
  }

  console.log(payload)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update profile");
  }

  const data = await res.json();
  revalidatePath("/profile");
  
  return data?.data || data;
}