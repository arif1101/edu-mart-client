"use client";

import { Star, GraduationCap, Book, FileText } from "lucide-react";

interface UserDashboardProps {
  user: {
    name?: string;
    email?: string;
    image?: string;
  } | null;
}

export default function UserDashboard({ user }: UserDashboardProps) {
  return (
    <div className="bg-gray-100 dark:bg-black pt-12 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <img
            src={user?.image || "/avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{user?.email}</p>
        </div>

        {/* Status Cards */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            {
              title: "Course Purchased",
              count: 1,
              icon: <Star size={26} />,
              color: "text-indigo-500",
            },
            {
              title: "Course Ongoing",
              count: 0,
              icon: <GraduationCap size={26} />,
              color: "text-green-500",
            },
            {
              title: "Purchased Books",
              count: 0,
              icon: <Book size={26} />,
              color: "text-yellow-500",
            },
            {
              title: "Participated Exams",
              count: 0,
              icon: <FileText size={26} />,
              color: "text-red-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{item.title}</h3>
                <div className={item.color}>{item.icon}</div>
              </div>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Table */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {[
                  "Course",
                  "Level",
                  "Duration",
                  "Price",
                  "Progress",
                  "Action",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-left text-sm font-semibold text-gray-600"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">Go Bangla Tutorial</td>
                <td className="p-4">Beginner</td>
                <td className="p-4">3.5 mins</td>
                <td className="p-4">Free</td>
                <td className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-sky-500 h-3 rounded-full w-full" />
                  </div>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg">
                    View Course
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
