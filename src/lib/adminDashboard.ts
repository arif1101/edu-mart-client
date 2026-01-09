"use server";

import { cookies } from "next/headers";

export async function getAdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/dashboard`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch admin dashboard");
  }

  const data = await res.json();
  return data.data;
}
