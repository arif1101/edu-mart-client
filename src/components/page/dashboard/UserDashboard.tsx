"use client";

import { GraduationCap, Book, FileText, Award, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { mockExamHistory } from "@/data/mockData";

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
  const totalCourses = enrollments.flatMap((e) => e.courses).length || 1;
  const recentExams = mockExamHistory.slice(0, 3);

  return (
    <div className="w-full space-y-8 py-4">
      {/* Profile Greeting Banner */}
      <div className="bg-indigo-600 dark:bg-indigo-950 rounded-lg p-6 md:p-8 text-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <img
            src={user?.picture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"}
            alt={user?.name || "Student"}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/30 shrink-0"
          />
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-cyan-300 text-xs font-semibold mb-1">
              <Sparkles className="w-3 h-3" />
              Student Portal
            </div>
            <h1 className="text-xl md:text-2xl font-bold">
              Welcome back, {user?.name || "Student"}!
            </h1>
            <p className="text-xs md:text-sm text-indigo-100 dark:text-gray-300 mt-0.5">
              Track your course progress, AI exam evaluations, and E-Books library.
            </p>
          </div>
        </div>

        <Link
          href="/exam"
          className="px-4 py-2.5 bg-white text-indigo-600 hover:bg-indigo-50 rounded-md text-xs font-bold transition shrink-0 flex items-center gap-1.5 shadow-xs"
        >
          <span>Take AI Exam</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Quick Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard title="Enrolled Courses" count={totalCourses} icon={<GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} />
        <StatCard title="AI Exams Taken" count={mockExamHistory.length} icon={<FileText className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} />
        <StatCard title="Avg Exam Score" count="85%" icon={<Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} />
        <StatCard title="Purchased E-Books" count={2} icon={<Book className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} />
      </div>

      {/* Recent Enrolled Courses Section */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Active Enrolled Courses</span>
          </h2>
          <Link href="/enrolled" className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline">
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 font-bold border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="p-3">Course Title</th>
                <th className="p-3">Level</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Progress</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
              {enrollments.flatMap((enrollment) =>
                enrollment.courses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition">
                    <td className="p-3 font-bold text-gray-900 dark:text-white">{course.title}</td>
                    <td className="p-3 font-medium">{course.level}</td>
                    <td className="p-3 font-medium">{course.duration}</td>
                    <td className="p-3">
                      <div className="w-32 bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div className="bg-indigo-600 h-2 rounded-full w-3/4" />
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <Link href={`/enrolled/${course._id}`}>
                        <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold transition cursor-pointer">
                          Continue
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

      {/* Recent AI Exam Results Summary */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Recent AI Exam Results</span>
          </h2>
          <Link href="/dashboard/exam-history" className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline">
            Full Exam History
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 font-bold border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="p-3">Subject</th>
                <th className="p-3">Topic</th>
                <th className="p-3">Date</th>
                <th className="p-3">Score</th>
                <th className="p-3 text-right">Grade Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
              {recentExams.map((exam) => (
                <tr key={exam.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-3 font-bold text-gray-900 dark:text-white">{exam.subject}</td>
                  <td className="p-3 font-medium text-gray-500 dark:text-gray-400">{exam.topic}</td>
                  <td className="p-3 font-medium">{exam.date}</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-cyan-400">{exam.scorePercentage}%</td>
                  <td className="p-3 text-right">
                    <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-md">
                      {exam.gradeBadge}
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

function StatCard({ title, count, icon }: { title: string; count: string | number; icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs flex items-center justify-between">
      <div>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{title}</span>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{count}</p>
      </div>
      <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-md">
        {icon}
      </div>
    </div>
  );
}
