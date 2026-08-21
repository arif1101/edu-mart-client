"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessClient() {
  const router = useRouter();
  const [status] = useState<"loading" | "success" | "error">("success");

  useEffect(() => {
    const timer = setTimeout(() => router.push("/courses"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CheckCircle className="text-green-500" size={80} />
      <h1 className="text-3xl font-bold mt-6">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Redirecting to your courses...</p>
    </div>
  );
}