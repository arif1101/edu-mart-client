/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  DollarSign,
  Users,
  Book,
  Star,
  Activity,
} from "lucide-react";
import { getAdminDashboard } from "@/lib/adminDashboard";


/* -------------------- Stat Card -------------------- */
type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
};

const StatCard = ({ title, value, icon: Icon, iconColor }: StatCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <div className="flex items-start justify-between mb-3">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
  </div>
);

/* -------------------- Enrollment Trend -------------------- */
const EnrollmentChart = ({ data }: any) => {
  if (!data?.length) return null;

  const max = Math.max(...data.map((d: any) => d.enrolled), 1);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">
        Student Enrollment Trend
      </h2>

      <div className="flex items-end gap-4 h-60">
        {data.map((item: any, i: number) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div
              className="w-8 bg-purple-500 rounded-t-md"
              style={{ height: `${(item.enrolled / max) * 100}%` }}
            />
            <span className="text-xs mt-2 text-gray-500">
              {item._id.month}/{item._id.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------- Course Popularity -------------------- */
const CoursePopularityChart = ({ data }: any) => {
  if (!data?.length) return null;

  const max = Math.max(...data.map((d: any) => d.value), 1);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Course Popularity</h2>

      <div className="space-y-4">
        {data.map((course: any, i: number) => (
          <div key={i}>
            <div className="flex justify-between mb-1 text-sm">
              <span>{course.name}</span>
              <span>{course.value}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-emerald-500 rounded"
                style={{ width: `${(course.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------- Main Page -------------------- */
export default function AdminDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAdminDashboard()
      .then(setData)
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p className="text-red-500 p-6">{error}</p>;
  }

  if (!data) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  const { stats, charts } = data;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1600px] mx-auto space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          <StatCard title="Active Courses" value={stats.activeCourses} icon={GraduationCap} iconColor="text-emerald-500" />
          <StatCard title="Total Revenue" value={stats.totalRevenue} icon={DollarSign} iconColor="text-purple-500" />
          <StatCard title="Enrolled Students" value={stats.enrolledStudents} icon={Users} iconColor="text-blue-500" />
          <StatCard title="Total Books" value={stats.totalBooks} icon={Book} iconColor="text-yellow-500" />
          <StatCard title="Avg Course Rating" value={stats.avgCourseRating} icon={Star} iconColor="text-pink-500" />
          <StatCard title="Total Students" value={stats.totalStudents} icon={Activity} iconColor="text-teal-500" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <EnrollmentChart data={charts.enrollmentTrend} />
          <CoursePopularityChart data={charts.coursePopularity} />
        </div>
      </div>
    </div>
  );
}
