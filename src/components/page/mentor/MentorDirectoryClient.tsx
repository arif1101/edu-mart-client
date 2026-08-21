"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Star, Users, Briefcase, Award, MapPin, ArrowRight, Sparkles, Filter, X } from "lucide-react";
import { mockMentors, mentorCategories, Mentor } from "@/data/mentorsData";

export default function MentorDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  const filteredMentors = useMemo(() => {
    return mockMentors.filter((mentor) => {
      const matchesCategory =
        selectedCategory === "All Categories" || mentor.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        mentor.name.toLowerCase().includes(q) ||
        mentor.role.toLowerCase().includes(q) ||
        mentor.company.toLowerCase().includes(q) ||
        mentor.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Header Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 text-white p-8 md:p-12 border border-indigo-900/50 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>World-Class Faculty & Industry Experts</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Learn Directly From{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Top Industry Mentors
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            Connect with seasoned leaders from companies like Google, Meta, Apple, AWS, and Figma. Get expert guidance, master high-demand tech skills, and accelerate your career.
          </p>

          {/* Search Input Bar */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentor by name, role (e.g. Next.js, UI/UX, Google)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Category Filter Pills */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <Filter className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span>Filter by Expertise</span>
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-gray-900 dark:text-white">{filteredMentors.length}</strong> Mentors
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {mentorCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

      {/* Mentors Grid */}
      {filteredMentors.length === 0 ? (
        <div className="p-12 text-center bg-gray-50 dark:bg-gray-900/50 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl space-y-3">
          <Users className="w-10 h-10 text-gray-400 mx-auto" />
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">No Mentors Found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            We couldn't find any mentors matching "{searchQuery}". Try searching for another topic or resetting filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
            }}
            className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      )}
    </div>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-900">
      {/* Top Image & Badge Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-950">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-80" />

        {/* Category Pill Top Left */}
        <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
          {mentor.category}
        </span>

        {/* Rating Pill Top Right */}
        <span className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-xs border border-white/20 text-amber-400 text-[11px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{mentor.rating.toFixed(1)}</span>
        </span>

        {/* Name & Company overlay at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-base font-extrabold leading-snug group-hover:text-cyan-300 transition">
            {mentor.name}
          </h3>
          <p className="text-xs text-gray-300 font-medium truncate">
            {mentor.role}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-2 text-[11px] p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 shrink-0" />
            <span>{(mentor.totalStudents / 1000).toFixed(1)}k Students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 shrink-0" />
            <span>{mentor.experienceYears}+ Yrs Exp</span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1">
          {mentor.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {skill}
            </span>
          ))}
          {mentor.skills.length > 3 && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 text-gray-400">
              +{mentor.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Company & Location */}
        <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-2.5">
          <div className="flex items-center gap-1 truncate max-w-[130px]">
            <Briefcase className="w-3 h-3 text-gray-400 shrink-0" />
            <span className="truncate">{mentor.company}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
            <span>{mentor.location.split(",")[0]}</span>
          </div>
        </div>

        {/* View Profile Action Link */}
        <Link href={`/mentors/${mentor.id}`} className="block pt-1">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer group-hover:bg-indigo-700">
            <span>View Deep Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
