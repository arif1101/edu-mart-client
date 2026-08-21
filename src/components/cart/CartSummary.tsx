/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CartSummary({ subtotal }: any) {
  const router = useRouter();

  const handleCheckout = () => {
    toast.success("Redirecting to checkout...");
    router.push("/payment-success");
  };

  return (
    <div className="bg-white dark:bg-gray-900 border rounded-2xl p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">৳ {subtotal}</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-3 border-t">
          <span>Total</span>
          <span>৳ {subtotal}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition cursor-pointer"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}