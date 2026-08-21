"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Trash2,
  FileText,
  Eye,
  Clock,
} from "lucide-react";
import { mockBlogPosts, BlogPost } from "@/data/blogsData";
import { toast } from "sonner";

export default function AdminBlogsClient() {
  const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogPosts);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const q = searchQuery.toLowerCase().trim();
      return (
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
      );
    });
  }, [blogs, searchQuery]);

  const handleDeleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
    toast.success("Blog article deleted!");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span>Editorial & Blog Articles Management</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage tech tutorials, career growth guides, and news articles published on EduMart Journal.
          </p>
        </div>

        <Link href="/admin/add-blog">
          <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Create New Article</span>
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search article title, author name, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Article</th>
                <th className="p-4">Author</th>
                <th className="p-4">Category</th>
                <th className="p-4">Read Time & Views</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-12 h-10 rounded-md object-cover border border-gray-200 dark:border-gray-800 shrink-0"
                      />
                      <div>
                        <Link href={`/blogs/${blog.slug}`} className="font-bold text-gray-900 dark:text-white line-clamp-1 hover:text-indigo-600 transition">
                          {blog.title}
                        </Link>
                        <p className="text-[10px] text-gray-400 truncate max-w-xs">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                    {blog.author.name}
                  </td>

                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800">
                      {blog.category}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="space-y-0.5 text-[11px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {blog.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-gray-400" />
                        {blog.views.toLocaleString()} Views
                      </span>
                    </div>
                  </td>

                  <td className="p-4 text-gray-500 text-[11px]">
                    {blog.date}
                  </td>

                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
