"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Tag, ShieldCheck } from "lucide-react";

export default function CartSummary({ subtotal }: any) {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "EDUMART20") {
      setDiscount(50);
      toast.success("Promo code EDUMART20 applied! (৳50 discount)");
    } else if (promoCode.trim() !== "") {
      toast.error("Invalid coupon code. Try EDUMART20");
    }
  };

  const finalTotal = Math.max(subtotal - discount, 0);

  const handleCheckout = () => {
    toast.success("Redirecting to secure payment checkout...");
    router.push("/payment-success");
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 sticky top-24 shadow-xs space-y-5">
      <h2 className="text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
        Order Summary
      </h2>

      {/* Promo Code Input */}
      <form onSubmit={handleApplyPromo} className="space-y-1.5">
        <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 flex items-center gap-1">
          <Tag className="w-3 h-3 text-indigo-600 dark:text-cyan-400" />
          <span>Have a Promo Code?</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. EDUMART20"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 px-3 py-1.5 text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-gray-900 hover:bg-black dark:bg-gray-800 text-white rounded-md text-xs font-semibold transition cursor-pointer"
          >
            Apply
          </button>
        </div>
      </form>

      {/* Price Breakdown */}
      <div className="space-y-2.5 text-xs pt-3 border-t border-gray-100 dark:border-gray-800">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900 dark:text-white">৳{subtotal}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
            <span>Coupon Discount</span>
            <span>-৳{discount}</span>
          </div>
        )}

        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Estimated Shipping / Taxes</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">FREE</span>
        </div>

        <div className="flex justify-between text-sm font-bold pt-3 border-t border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white">
          <span>Total Payable</span>
          <span className="text-indigo-600 dark:text-cyan-400 text-base">৳{finalTotal}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-xs font-bold hover:bg-indigo-700 transition cursor-pointer shadow-xs"
      >
        Proceed to Checkout
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>256-Bit SSL Encrypted Checkout</span>
      </div>
    </div>
  );
}