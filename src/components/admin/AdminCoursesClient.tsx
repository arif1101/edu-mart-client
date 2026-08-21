"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Filter,
  GraduationCap,
  Layers,
  Star,
  Users,
} from "lucide-react";
import { mockCourses } from "@/data/mockData";
import { toast } from "sonner";

export default function AdminCoursesClient() {
  const [courses, setCourses] = useState(mockCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [deleteCourseId, setDeleteCourseId] = useState<string | null>(null);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Published" && (course.isPublished ?? true)) ||
        (selectedStatus === "Draft" && course.isPublished === false);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.instructor?.name.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q);

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [courses, searchQuery, selectedCategory, selectedStatus]);

  const togglePublishStatus = (id: string) => {
    setCourses((prev: any[]) =>
      prev.map((c) => {
        if (c._id === id) {
          const updated = c.isPublished === false ? true : false;
          toast.success(
            `Course "${c.title}" is now ${updated ? "Published" : "Draft"}`
          );
          return { ...c, isPublished: updated };
        }
        return c;
      })
    );
  };

  const handleDeleteCourse = (id: string) => {
    setCourses((prev: any[]) => prev.filter((c) => c._id !== id));
    setDeleteCourseId(null);
    toast.success("Course deleted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span>Course Catalog Management</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage course listings, edit module sections, toggle publication status, or add new courses.
          </p>
        </div>

        <Link href="/admin/add-course">
          <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Add New Course</span>
          </button>
        </Link>
      </div>

      {/* Filter & Search Controls */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-3 shadow-xs">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search course title, instructor name, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-lg text-xs bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 font-semibold cursor-pointer"
            >
              <option value="All">Status: All</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-lg text-xs bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 font-semibold cursor-pointer"
            >
              <option value="All">Category: All</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Science & AI">Data Science & AI</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Course Info</th>
                <th className="p-4">Instructor</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Rating & Students</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredCourses.map((course: any) => (
                <tr key={course._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={course.thumbnail || course.image}
                        alt={course.title}
                        className="w-12 h-10 rounded-md object-cover border border-gray-200 dark:border-gray-800 shrink-0"
                      />
                      <div className="space-y-0.5 max-w-xs">
                        <p className="font-bold text-gray-900 dark:text-white line-clamp-1">
                          {course.title}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {course.curriculum?.length || 0} Modules
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                    {course.instructor?.name || "Senior Instructor"}
                  </td>

                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800">
                      {course.category}
                    </span>
                  </td>

                  <td className="p-4 font-extrabold text-gray-900 dark:text-white">
                    ${course.price}
                  </td>

                  <td className="p-4">
                    <div className="space-y-0.5 text-[11px]">
                      <div className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{course.averageRating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-400 flex items-center gap-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span>{course.studentsEnrolled || 12400} Enrolled</span>
                      </p>
                    </div>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => togglePublishStatus(course._id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition ${
                        course.isPublished !== false
                          ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-300 dark:border-gray-700"
                      }`}
                    >
                      {course.isPublished !== false ? "● Published" : "○ Draft"}
                    </button>
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/admin/course/${course._id}/sections`}>
                        <button
                          title="Manage Curriculum Sections"
                          className="p-1.5 text-gray-600 hover:text-indigo-600 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                        >
                          <Layers className="w-4 h-4" />
                        </button>
                      </Link>

                      <Link href="/admin/edit-course">
                        <button
                          title="Edit Course Details"
                          className="p-1.5 text-gray-600 hover:text-indigo-600 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </Link>

                      <button
                        onClick={() => setDeleteCourseId(course._id)}
                        title="Delete Course"
                        className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteCourseId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Confirm Course Deletion
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Are you sure you want to permanently delete this course? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setDeleteCourseId(null)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCourse(deleteCourseId)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg transition"
              >
                Delete Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
