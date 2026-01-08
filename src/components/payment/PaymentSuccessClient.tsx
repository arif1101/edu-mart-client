"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const paymentIntent = searchParams.get("payment_intent");

  useEffect(() => {
    let isMounted = true;

    const verify = async () => {
      if (!paymentIntent) {
        if (isMounted) setStatus("error");
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/verify/${paymentIntent}`,
          { credentials: "include" }
        );

        if (!isMounted) return;

        if (res.ok) {
          setStatus("success");
          setTimeout(() => router.push("/courses"), 3000);
        } else {
          setStatus("error");
        }
      } catch {
        if (isMounted) setStatus("error");
      }
    };

    verify();

    return () => {
      isMounted = false;
    };
  }, [paymentIntent, router]);

  /* ---------------- UI STATES ---------------- */

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-indigo-600" size={48} />
        <p className="mt-4 text-gray-600">Verifying payment...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 text-6xl mb-4">✕</div>
        <h1 className="text-2xl font-bold">Payment Failed</h1>
        <button
          onClick={() => router.push("/cart")}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CheckCircle className="text-green-500" size={80} />
      <h1 className="text-3xl font-bold mt-6">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">
        Redirecting to your courses...
      </p>
    </div>
  );
}
