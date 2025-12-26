"use client";

import {
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Link2,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogDetailsPage() {
  const router = useRouter();

  const blog = {
    title: "The Future of Online Learning",
    excerpt:
      "How AI, personalization, and modern platforms are redefining education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "EdTech",
    date: "March 12, 2025",
    readTime: "6 min read",
    views: "1.2k",
    author: "Admin",
    authorImage: "https://i.pravatar.cc/150?img=32",
    content: `
Online education is evolving faster than ever. Artificial intelligence,
personalized learning paths, and interactive platforms are reshaping how
students learn.

Modern EdTech platforms focus on adaptive learning, real-time feedback,
and data-driven insights to improve outcomes.

The future belongs to platforms that combine technology with pedagogy
in a meaningful way.
`,
    tags: ["Education", "Learning", "Career", "Skills"],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push("/blogs")}
            className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Blogs
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative aspect-[21/9] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Article */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-sky-100 text-sky-600 text-sm font-semibold rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-slate-500">
                {blog.views} views
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-6 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {blog.author}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-600">
                  Share:
                </span>
                {[Twitter, Facebook, Linkedin, Link2].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-sky-500 hover:text-white transition"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            {blog.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 my-10 rounded-r-lg">
              <p className="italic text-slate-700">
                “The beautiful thing about learning is that no one can take it
                away from you.” — B.B. King
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <Tag className="w-5 h-5 text-slate-400" />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-sm rounded-full text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex gap-6">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  About {blog.author}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  An experienced educator and EdTech enthusiast passionate
                  about accessible, modern learning experiences.
                </p>
                <button className="text-sky-500 hover:text-sky-600 font-medium text-sm">
                  View all posts →
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Explore our courses and level up your skills today.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-xl font-bold hover:bg-slate-100 transition">
            Browse Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
