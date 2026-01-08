import PaymentSuccessClient from "@/components/payment/PaymentSuccessClient";
import { Suspense } from "react";

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
