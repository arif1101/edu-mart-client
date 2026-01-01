/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

// const API_URL = "http://localhost:5000/api/cart/course/me";

export default function CartClient() {
  const [cart, setCart] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

const fetchCart = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/course/me`,
      { credentials: "include" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch cart");
    }

    const data = await res.json();
    setCart(data?.data || null);
  } catch (error) {
    console.error("Cart fetch error:", error);
  } finally {
    setLoading(false);
  }
};


  const removeItem = (id: string) => {
    setCart((prev: any[]) => prev.filter(item => item._id !== id));
  };

const subtotal = cart?.items?.reduce(
  (sum: number, item: any) => sum + item.price,
  0
) || 0;


if (loading) {
  return <p className="text-gray-500">Loading cart...</p>;
}

if (!cart || cart.items.length === 0) {
  return <EmptyCart />;
}

return (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* Cart Items */}
    <div className="lg:col-span-8 space-y-5">
      {cart.items.map((item: any, index: number) => (
        <CartItem
          key={index}
          item={item}
        />
      ))}
    </div>

    {/* Summary */}
    <div className="lg:col-span-4">
      <CartSummary
        subtotal={subtotal}
      />
    </div>  
  </div>
);

}
