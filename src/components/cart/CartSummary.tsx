/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { createPaymentIntent } from "@/lib/payment"; // ✅ Import server action

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartSummary({ subtotal }: any) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const secret = await createPaymentIntent(); // ✅ Use server action
      setClientSecret(secret);
    } catch (error: any) {
      console.error("Payment intent error:", error);
      setError(error.message || "Failed to initiate checkout");
    } finally {
      setLoading(false);
    }
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

      {error && (
        <div className="text-red-500 text-sm mb-4 p-3 bg-red-50 rounded">
          {error}
        </div>
      )}

      {!clientSecret ? (
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Proceed to Checkout"}
        </button>
      ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}