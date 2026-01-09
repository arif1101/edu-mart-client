/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { getCart, removeCourseFromCart } from "@/lib/cart";

export default function CartClient() {
  const [cart, setCart] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.error("Cart fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

const handleRemove = async (courseId: string) => {
  try {
    await removeCourseFromCart(courseId);

    setCart((prev: any) => ({
      ...prev,
      items: prev.items.filter(
        (item: any) => item.course._id !== courseId
      ),
    }));
  } catch (error: any) {
    console.log(error.message);
  }
};


  const subtotal =
    cart?.items?.reduce((sum: number, item: any) => sum + item.price, 0) || 0;

  if (loading) return <p className="text-gray-500">Loading cart...</p>;

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-5">
        {cart.items.map((item: any, index: any) => (
          <CartItem key={index} item={item} onRemove={handleRemove} />
        ))}
      </div>

      <div className="lg:col-span-4">
        <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
}