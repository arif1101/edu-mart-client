"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  DollarSign,
  Users,
  BookOpen,
  Star,
  UserCheck,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  PlusCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { mockAdminOrders, mockAdminUsers } from "@/data/adminData";
import { mockCourses } from "@/data/mockData";

export default function AdminDashboardClient() {
  const stats = [
    {
      title: "Total Platform Revenue",
      value: "$145,000",
      change: "+14.2% this month",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Total Enrolled Students",
      value: "3,400",
      change: "+8.5% active learners",
      icon: Users,
      color: "from-indigo-500 to-blue-600",
      textColor: "text-indigo-600 dark:text-cyan-400",
    },
    {
      title: "Active Courses",
      value: mockCourses.length.toString(),
      change: "All modules published",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-600",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "E-Books Catalog",
      value: "15",
      change: "1,450 total downloads",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Verified Mentors",
      value: "8",
      change: "Top industry experts",
      icon: UserCheck,
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      title: "Average Course Rating",
      value: "4.9 ★",
      change: "Based on 850+ reviews",
      icon: Star,
      color: "from-pink-500 to-rose-600",
      textColor: "text-pink-600 dark:text-pink-400",
    },
  ];

  const chartData = [
    { month: "Jan", revenue: 18400, enrolled: 320 },
    { month: "Feb", revenue: 22100, enrolled: 410 },
    { month: "Mar", revenue: 27800, enrolled: 560 },
    { month: "Apr", revenue: 24500, enrolled: 480 },
    { month: "May", revenue: 31200, enrolled: 690 },
    { month: "Jun", revenue: 36000, enrolled: 840 },
  ];

  const maxRevenue = Math.max(...chartData.map((d) => d.revenue));

  return (
    <div className="space-y-6">
      {/* Header Greeting Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 text-white rounded-2xl border border-indigo-900/50 shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>EduMart Enterprise Admin System</span>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
            Welcome Back, Super Admin 👋
          </h1>
          <p className="text-xs text-gray-300">
            Platform performance overview, financial metrics, and student activity log.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link href="/admin/add-course">
            <button className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer">
              <PlusCircle className="w-4 h-4" />
              <span>Add Course</span>
            </button>
          </Link>
          <Link href="/admin/orders">
            <button className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition border border-white/20 cursor-pointer">
              <CreditCard className="w-4 h-4" />
              <span>View Revenue</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Top 6 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 truncate">
                  {stat.title}
                </span>
                <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${stat.color} text-white shadow-xs`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl font-extrabold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <p className={`text-[10px] font-bold ${stat.textColor} flex items-center gap-0.5`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.change}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Growth Bar Chart */}
        <div className="lg:col-span-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>Monthly Platform Revenue ($)</span>
              </h3>
              <p className="text-[11px] text-gray-500">Gross revenue performance over the last 6 months</p>
            </div>
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
              +28.4% YoY
            </span>
          </div>

          <div className="h-56 flex items-end gap-4 pt-4">
            {chartData.map((d, idx) => {
              const heightPct = (d.revenue / maxRevenue) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <span className="text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">
                    ${(d.revenue / 1000).toFixed(1)}k
                  </span>
                  <div
                    style={{ height: `${heightPct}%` }}
                    className="w-full bg-gradient-to-t from-indigo-600 via-indigo-500 to-cyan-400 rounded-t-lg transition-all duration-300 group-hover:brightness-110 shadow-xs"
                  />
                  <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                    {d.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Category Distribution */}
        <div className="lg:col-span-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
          <div className="border-b border-gray-100 dark:border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Enrollment Distribution
            </h3>
            <p className="text-[11px] text-gray-500">Share of students by subject category</p>
          </div>

          <div className="space-y-3">
            {[
              { category: "Web Development", percentage: 42, color: "bg-indigo-600" },
              { category: "UI/UX Design", percentage: 28, color: "bg-cyan-500" },
              { category: "Data Science & AI", percentage: 18, color: "bg-purple-600" },
              { category: "Mobile Apps", percentage: 12, color: "bg-emerald-500" },
            ].map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-700 dark:text-gray-300">{cat.category}</span>
                  <span className="text-gray-900 dark:text-white font-bold">{cat.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div style={{ width: `${cat.percentage}%` }} className={`h-full ${cat.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
            <Link href="/admin/courses" className="text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center justify-between hover:underline">
              <span>Manage All Courses ({mockCourses.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Orders & Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Transactions Table */}
        <div className="lg:col-span-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>Recent Sales & Transactions</span>
            </h3>
            <Link href="/admin/orders" className="text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline">
              View All Orders →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800 text-gray-400 uppercase text-[10px] tracking-wider">
                  <th className="py-2.5">Order ID</th>
                  <th className="py-2.5">Student</th>
                  <th className="py-2.5">Purchased Item</th>
                  <th className="py-2.5">Amount</th>
                  <th className="py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {mockAdminOrders.slice(0, 4).map((ord) => (
                  <tr key={ord.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                    <td className="py-3 font-mono font-bold text-gray-900 dark:text-white">
                      {ord.orderNumber}
                    </td>
                    <td className="py-3 font-medium text-gray-700 dark:text-gray-300">
                      {ord.studentName}
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-400 max-w-[200px] truncate">
                      {ord.itemTitle}
                    </td>
                    <td className="py-3 font-bold text-gray-900 dark:text-white">
                      ${ord.amount}
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
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

        {/* Registered Users List Preview */}
        <div className="lg:col-span-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>Recent Users</span>
            </h3>
            <Link href="/admin/users" className="text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline">
              All Users →
            </Link>
          </div>

          <div className="space-y-3">
            {mockAdminUsers.slice(0, 4).map((usr) => (
              <div key={usr.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <img
                    src={usr.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"}
                    alt={usr.name}
                    className="w-8 h-8 rounded-full object-cover border border-indigo-200 dark:border-indigo-800"
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{usr.name}</p>
                    <p className="text-[10px] text-gray-400">{usr.email}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800">
                  {usr.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
