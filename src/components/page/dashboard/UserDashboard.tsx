/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Star, GraduationCap, Book, FileText } from "lucide-react";
import Link from "next/link";

interface Enrollment {
  _id: string;
  courses: {
    _id: string;
    title: string;
    level: string;
    duration: string;
    price: number;
  }[];
}

interface UserDashboardProps {
  user: {
    name?: string;
    email?: string;
    picture?: string;
  } | null;
  enrollments: Enrollment[];
}

export default function UserDashboard({
  user,
  enrollments,
}: UserDashboardProps) {
  const totalEnrollments = enrollments.length;

  return (
    <div className="bg-gray-100 dark:bg-black pt-12 pb-12">
      {/* Profile Card */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <img
            src={user?.picture || "/avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{user?.email}</p>
        </div>

        {/* Status Cards */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <Stat title="Course Purchased" count={totalEnrollments} icon={<Star size={26} />} />
          <Stat title="Course Ongoing" count={totalEnrollments} icon={<GraduationCap size={26} />} />
          <Stat title="Purchased Books" count={0} icon={<Book size={26} />} />
          <Stat title="Participated Exams" count={0} icon={<FileText size={26} />} />
        </div>
      </div>

      {/* Course Table */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {["Course", "Level", "Duration", "Price", "Progress", "Action"].map(
                  (head) => (
                    <th key={head} className="px-4 py-3 text-left text-sm font-semibold">
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {enrollments.flatMap((enrollment) =>
                enrollment.courses.map((course) => (
                  <tr key={course._id} className="border-t">
                    <td className="p-4 font-medium">{course.title}</td>
                    <td className="p-4">{course.level}</td>
                    <td className="p-4">{course.duration}</td>
                    <td className="p-4">{course.price}</td>
                    <td className="p-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-500 h-3 rounded-full w-full" />
                      </div>
                    </td>
                    <td className="p-4">
                      <Link href={`/enrolled/${course._id}`}>
                        <button className="px-4 py-2 bg-sky-500 text-white rounded-lg">
                          View Course
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, count, icon }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
