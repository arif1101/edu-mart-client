/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartSummary({ subtotal }: any) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/create-intent`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Payment intent error:", error);
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