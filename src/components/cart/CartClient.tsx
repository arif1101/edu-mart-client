/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { mockCart } from "@/data/mockData";

export default function CartClient() {
  const [cart, setCart] = useState<any>(mockCart);

  const handleRemove = (courseId: string) => {
    setCart((prev: any) => ({
      ...prev,
      items: prev.items.filter(
        (item: any) => (item.course._id || item.course.id) !== courseId
      ),
    }));
  };

  const subtotal =
    cart?.items?.reduce((sum: number, item: any) => sum + (item.price || item.course.price || 0), 0) || 0;

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