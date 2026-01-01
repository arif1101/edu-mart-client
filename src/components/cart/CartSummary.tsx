"use client";

import { Button } from "@/components/ui/button";

export default function CartSummary({ subtotal }: { subtotal: number }) {
  const tax = 0;
  const total = subtotal + tax;

  return (
    <div className="bg-white dark:bg-gray-900 border rounded-2xl p-6 sticky top-24 space-y-5">
      <h3 className="text-xl font-semibold">
        Order Summary
      </h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>৳ {subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tax</span>
          <span>৳ {tax}</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>৳ {total}</span>
        </div>
      </div>

      <Button className="w-full h-12 text-base bg-sky-500 hover:bg-sky-600">
        Proceed to Secure Payment
      </Button>

      <p className="text-xs text-gray-400 text-center">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
}
