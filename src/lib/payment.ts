// lib/payment.ts
"use server";

import { cookies } from "next/headers";

export async function createPaymentIntent() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/create-intent`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to create payment intent");
  }

  const data = await res.json();
  return data.clientSecret;
}

export async function verifyPayment(paymentIntentId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/verify/${paymentIntentId}`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Payment verification failed");
  }

  return await res.json();
}