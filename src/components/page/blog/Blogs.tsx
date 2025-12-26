"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BLOGS_PER_PAGE = 6;

const blogs = [
  {
    id: 1,
    title: "The Future of Online Learning",
    excerpt: "Explore how AI and personalization are reshaping education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "EdTech",
    date: "March 12, 2025",
  },
  {
    id: 2,
    title: "How Students Learn Faster with Technology",
    excerpt: "Modern tools help students retain knowledge better.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    category: "Learning",
    date: "March 10, 2025",
  },
  {
    id: 3,
    title: "Best Practices for Online Courses",
    excerpt: "Design engaging courses with higher completion rates.",
    image: "https://images.unsplash.com/photo-1584697964403-3b47f0f3f1a4",
    category: "Courses",
    date: "March 8, 2025",
  },
    {
    id: 11,
    title: "The Future of Online Learning",
    excerpt: "Explore how AI and personalization are reshaping education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "EdTech",
    date: "March 12, 2025",
  },
  {
    id: 12,
    title: "How Students Learn Faster with Technology",
    excerpt: "Modern tools help students retain knowledge better.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    category: "Learning",
    date: "March 10, 2025",
  },
  {
    id: 13,
    title: "Best Practices for Online Courses",
    excerpt: "Design engaging courses with higher completion rates.",
    image: "https://images.unsplash.com/photo-1584697964403-3b47f0f3f1a4",
    category: "Courses",
    date: "March 8, 2025",
  },
    {
    id: 21,
    title: "The Future of Online Learning",
    excerpt: "Explore how AI and personalization are reshaping education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "EdTech",
    date: "March 12, 2025",
  },
  {
    id: 22,
    title: "How Students Learn Faster with Technology",
    excerpt: "Modern tools help students retain knowledge better.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    category: "Learning",
    date: "March 10, 2025",
  },
  {
    id: 23,
    title: "Best Practices for Online Courses",
    excerpt: "Design engaging courses with higher completion rates.",
    image: "https://images.unsplash.com/photo-1584697964403-3b47f0f3f1a4",
    category: "Courses",
    date: "March 8, 2025",
  },
];

const categories = ["All", "EdTech", "Learning", "Courses"];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------- Filter ---------- */
  const filteredBlogs = useMemo(() => {
    return selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory]);

  /* ---------- Pagination ---------- */
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    return filteredBlogs.slice(start, start + BLOGS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Our <span className="text-sky-500">Blogs</span>
        </h1>
        <p className="mt-3 text-slate-600">
          Insights and updates from modern online education
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                selectedCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-sky-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>

            <div className="p-6">
              <span className="text-sm text-sky-500 font-medium">
                {blog.category}
              </span>

              <h2 className="mt-2 text-lg font-semibold text-slate-900 line-clamp-2">
                {blog.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-slate-400">
                  {blog.date}
                </span>
                <button className="text-sm font-medium text-sky-500 hover:text-sky-600">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Shadcn Pagination */}
      {totalPages > 1 && (
        <div className="mt-14 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((p) => Math.max(p - 1, 1))
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
}
