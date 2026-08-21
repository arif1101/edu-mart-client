"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  Sparkles,
  Filter,
  X,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { mockBlogPosts, blogCategories, BlogPost } from "@/data/blogsData";

const BLOGS_PER_PAGE = 6;

export default function BlogsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Identify featured article
  const featuredArticle = useMemo(() => {
    return mockBlogPosts.find((b) => b.featured) || mockBlogPosts[0];
  }, []);

  // Filter articles by category & search
  const filteredBlogs = useMemo(() => {
    return mockBlogPosts.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q) ||
        blog.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Paginated blogs
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
    <div className="space-y-8 pb-12">
      {/* Top Header Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white p-8 md:p-12 border border-indigo-900/50 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>EduMart Tech & Career Journal</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Insights, Tutorials &{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Industry Perspectives
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            Stay ahead with expert articles on Full-Stack Web Architecture, UI/UX Design Systems, AI integrations, and career advancement.
          </p>

          {/* Search Input Bar */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by topic (e.g. Next.js, Figma, AI, Career)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-10 py-3 text-xs md:text-sm rounded-xl bg-white/10 dark:bg-gray-900/80 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-hidden focus:ring-2 focus:ring-cyan-400 transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article Card */}
      {!searchQuery && selectedCategory === "All" && featuredArticle && (
        <div className="p-1 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-indigo-500/20 rounded-2xl">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden bg-gray-950">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-cyan-300" />
                Featured Story
              </span>
            </div>

            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 font-bold border border-indigo-200 dark:border-indigo-800">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white leading-snug hover:text-indigo-600 transition">
                  <Link href={`/blogs/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-indigo-200 dark:border-indigo-800"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                      {featuredArticle.author.name}
                    </p>
                    <p className="text-[10px] text-gray-400">{featuredArticle.date}</p>
                  </div>
                </div>

                <Link href={`/blogs/${featuredArticle.slug}`}>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs & Counter Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <Filter className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span>Category Filters</span>
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-gray-900 dark:text-white">{filteredBlogs.length}</strong> Articles
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {blogCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blogs Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="p-12 text-center bg-gray-50 dark:bg-gray-900/50 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl space-y-3">
          <BookOpen className="w-10 h-10 text-gray-400 mx-auto" />
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">No Articles Found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            We couldn't find any articles matching "{searchQuery}". Try another keyword or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {/* Shadcn Pagination */}
      {totalPages > 1 && (
        <div className="pt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="cursor-pointer text-xs"
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                      className="cursor-pointer text-xs font-bold"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="cursor-pointer text-xs"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-900">
      <div className="space-y-3">
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-950">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
            {blog.category}
          </span>

          <span className="absolute bottom-3 right-3 bg-gray-950/80 backdrop-blur-xs text-gray-300 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
            <Clock className="w-3 h-3 text-cyan-400" />
            {blog.readTime}
          </span>
        </div>

        {/* Card Content Body */}
        <div className="p-4 space-y-2.5">
          <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition line-clamp-2">
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </h3>

          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {blog.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info Row */}
      <div className="p-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-7 h-7 rounded-full object-cover border border-indigo-200 dark:border-indigo-800"
          />
          <div>
            <p className="text-[11px] font-bold text-gray-900 dark:text-white truncate max-w-[100px]">
              {blog.author.name}
            </p>
            <p className="text-[10px] text-gray-400">{blog.date}</p>
          </div>
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400 group-hover:underline flex items-center gap-1">
            Read
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
