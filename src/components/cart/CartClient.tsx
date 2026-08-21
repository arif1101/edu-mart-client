"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { mockCart } from "@/data/mockData";
import { ShoppingCart, Package, CheckCircle2, Truck } from "lucide-react";

export default function CartClient() {
  const [activeTab, setActiveTab] = useState<"CART" | "ORDERS">("CART");
  const [cart, setCart] = useState<any>(mockCart);

  const mockPastOrders = [
    {
      id: "ORD-9821",
      date: "2026-02-10",
      item: "JavaScript: The Definitive Guide (Hard Copy)",
      total: 450,
      status: "Delivered",
      tracking: "ST-8829104",
    },
    {
      id: "ORD-7140",
      date: "2026-01-18",
      item: "Next.js 15 Full-Stack Masterclass (Course)",
      total: 49.99,
      status: "Completed",
      tracking: "N/A (Digital Access)",
    },
  ];

  const handleRemove = (itemId: string) => {
    setCart((prev: any) => ({
      ...prev,
      items: prev.items.filter(
        (item: any) =>
          (item._id || item.course?._id || item.book?._id || item.id) !== itemId
      ),
    }));
  };

  const subtotal =
    cart?.items?.reduce(
      (sum: number, item: any) => sum + (item.price || item.course?.price || item.book?.hardPrice || 0),
      0
    ) || 0;

  return (
    <div className="w-full space-y-6">
      {/* Top Header & Tab Switcher */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex border-b">
        <button
          onClick={() => setActiveTab("CART")}
          className={`flex-1 py-2.5 px-4 rounded-md text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "CART"
              ? "bg-indigo-600 text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Active Cart ({cart.items.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("ORDERS")}
          className={`flex-1 py-2.5 px-4 rounded-md text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "ORDERS"
              ? "bg-indigo-600 text-white shadow-xs"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Past Orders & Shipments ({mockPastOrders.length})</span>
        </button>
      </div>

      {activeTab === "CART" ? (
        cart.items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-4">
              {cart.items.map((item: any, index: any) => (
                <CartItem key={index} item={item} onRemove={handleRemove} />
              ))}
            </div>

            <div className="lg:col-span-4">
              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )
      ) : (
        /* Past Orders History Tab */
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
            <Truck className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Shipment & Order History</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 font-bold border-b border-gray-100 dark:border-gray-800">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Purchased Item</th>
                  <th className="p-3">Total Paid</th>
                  <th className="p-3 text-right">Shipment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                {mockPastOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition">
                    <td className="p-3 font-mono font-bold text-indigo-600 dark:text-cyan-400">{ord.id}</td>
                    <td className="p-3 font-medium">{ord.date}</td>
                    <td className="p-3 font-bold text-gray-900 dark:text-white">{ord.item}</td>
                    <td className="p-3 font-bold">৳{ord.total}</td>
                    <td className="p-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-md">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{ord.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}