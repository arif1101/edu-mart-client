"use client";

import { useState, useMemo } from "react";
import {
  Search,
  DollarSign,
  CreditCard,
  CheckCircle2,
  Clock,
  Calendar,
  Download,
  Filter,
} from "lucide-react";
import { mockAdminOrders, AdminOrder } from "@/data/adminData";
import { toast } from "sonner";

export default function AdminOrdersClient() {
  const [orders, setOrders] = useState<AdminOrder[]>(mockAdminOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("All");

  const filteredOrders = useMemo(() => {
    return orders.filter((ord) => {
      const matchesMethod =
        selectedMethod === "All" || ord.paymentMethod === selectedMethod;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ord.orderNumber.toLowerCase().includes(q) ||
        ord.studentName.toLowerCase().includes(q) ||
        ord.itemTitle.toLowerCase().includes(q);

      return matchesMethod && matchesSearch;
    });
  }, [orders, searchQuery, selectedMethod]);

  const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="space-y-6">
      {/* Financial Overview Stat Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs space-y-1">
          <p className="text-[11px] font-bold text-gray-400 uppercase">Gross Sales Revenue</p>
          <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            ${totalRevenue.toFixed(2)}
          </div>
          <p className="text-[10px] text-gray-500 font-semibold">+14.2% from last month</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs space-y-1">
          <p className="text-[11px] font-bold text-gray-400 uppercase">Total Orders</p>
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-cyan-400">
            1,280
          </div>
          <p className="text-[10px] text-gray-500 font-semibold">98.5% completion rate</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs space-y-1">
          <p className="text-[11px] font-bold text-gray-400 uppercase">Avg. Order Value</p>
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
            $89.50
          </div>
          <p className="text-[10px] text-gray-500 font-semibold">Per enrolled student</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs space-y-1">
          <p className="text-[11px] font-bold text-gray-400 uppercase">bKash / Mobile Volume</p>
          <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">
            ৳ 45,200
          </div>
          <p className="text-[10px] text-gray-500 font-semibold">Direct mobile gateway</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-3 shadow-xs">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search order number, student name, or item title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="px-3 py-2 rounded-lg text-xs bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 font-semibold cursor-pointer"
            >
              <option value="All">Payment: All Gateways</option>
              <option value="bKash">bKash</option>
              <option value="Nagad">Nagad</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sales Orders Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Order ID</th>
                <th className="p-4">Student</th>
                <th className="p-4">Purchased Item</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Gateway</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-4 font-mono font-bold text-gray-900 dark:text-white">
                    {ord.orderNumber}
                  </td>

                  <td className="p-4">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{ord.studentName}</p>
                      <p className="text-[10px] text-gray-400">{ord.studentEmail}</p>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        ord.itemType === "Course"
                          ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800"
                          : "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                      }`}>
                        {ord.itemType}
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200 max-w-[220px] truncate">
                        {ord.itemTitle}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 font-extrabold text-gray-900 dark:text-white">
                    ${ord.amount}
                  </td>

                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                    {ord.paymentMethod}
                  </td>

                  <td className="p-4 text-gray-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {ord.date}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      ord.status === "Completed"
                        ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                        : "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                    }`}>
                      {ord.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
