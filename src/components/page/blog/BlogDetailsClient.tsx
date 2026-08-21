"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  CheckCircle2,
  Quote,
  Tag,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { BlogPost, getRelatedBlogs } from "@/data/blogsData";
import { toast } from "sonner";

interface BlogDetailsClientProps {
  blog: BlogPost;
}

export default function BlogDetailsClient({ blog }: BlogDetailsClientProps) {
  const [copied, setCopied] = useState(false);
  const relatedBlogs = getRelatedBlogs(blog.slug, blog.category, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Articles</span>
      </Link>

      {/* Main Article Container */}
      <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg space-y-8 p-6 md:p-10">
        {/* Header Metadata */}
        <header className="space-y-4 border-b border-gray-100 dark:border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-gray-400" />
              {blog.views.toLocaleString()} Views
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {blog.title}
          </h1>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            {blog.excerpt}
          </p>

          {/* Author & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40 shrink-0"
              />
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                  {blog.author.name}
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {blog.author.role}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 dark:border-gray-800">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mr-1 flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" />
                Share:
              </span>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-600 dark:text-gray-300 transition cursor-pointer"
                title="Copy Link"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-600 dark:text-gray-300 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-600 dark:text-gray-300 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://facebook.com`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-600 dark:text-gray-300 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-gray-950">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formatted Article Body */}
        <div className="space-y-6 text-sm text-gray-700 dark:text-gray-200 leading-relaxed max-w-none">
          {blog.content.map((paragraph, idx) => (
            <p key={idx} className="text-sm md:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Quote Callout */}
          {blog.quote && (
            <div className="my-6 p-6 bg-indigo-50/70 dark:bg-indigo-950/40 border-l-4 border-indigo-600 dark:border-cyan-400 rounded-r-xl space-y-2">
              <Quote className="w-6 h-6 text-indigo-600 dark:text-cyan-400 opacity-60" />
              <p className="text-sm md:text-base font-semibold italic text-gray-900 dark:text-white">
                "{blog.quote.text}"
              </p>
              <p className="text-xs font-bold text-indigo-600 dark:text-cyan-400">
                — {blog.quote.author}
              </p>
            </div>
          )}

          {/* Key Takeaways */}
          {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
            <div className="p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Key Takeaways
              </h4>
              <ul className="space-y-2">
                {blog.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400 shrink-0 mt-2" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-bold text-gray-500 mr-1">Tags:</span>
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="p-6 bg-gray-50/70 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40 shrink-0"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              Written by {blog.author.name}
            </h4>
            <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400">
              {blog.author.role}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
              {blog.author.bio}
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Related Articles</span>
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((rel) => (
              <div
                key={rel.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden p-4 space-y-3 shadow-xs hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-indigo-600 transition">
                    <Link href={`/blogs/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">{rel.readTime}</span>
                  <Link
                    href={`/blogs/${rel.slug}`}
                    className="text-indigo-600 dark:text-cyan-400 font-bold hover:underline flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
