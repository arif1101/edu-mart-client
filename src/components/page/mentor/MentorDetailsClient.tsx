"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Users,
  Award,
  BookOpen,
  MapPin,
  Briefcase,
  Globe,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mentor } from "@/data/mentorsData";

interface MentorDetailsClientProps {
  mentor: Mentor;
}

export default function MentorDetailsClient({ mentor }: MentorDetailsClientProps) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="space-y-8 pb-12">
      {/* Top Navigation Back Button */}
      <Link
        href="/mentors"
        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Mentors</span>
      </Link>

      {/* Hero Header Cover & Profile Summary */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {/* Cover Photo */}
        <div className="relative h-48 sm:h-64 w-full bg-gray-900">
          <img
            src={mentor.coverImage}
            alt={mentor.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

          <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {mentor.category}
          </span>
        </div>

        {/* Profile Info Row */}
        <div className="px-6 md:px-8 pb-6 relative -mt-16 sm:-mt-20 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white dark:border-gray-900 shadow-xl bg-gray-100"
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-white dark:border-gray-900 shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              {mentor.socialLinks.linkedin && (
                <a
                  href={mentor.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-gray-700 dark:text-gray-300 hover:text-indigo-600 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {mentor.socialLinks.github && (
                <a
                  href={mentor.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-gray-700 dark:text-gray-300 hover:text-indigo-600 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {mentor.socialLinks.website && (
                <a
                  href={mentor.socialLinks.website}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>

          {/* Name & Headline */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                {mentor.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800">
                Verified Faculty
              </span>
            </div>

            <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">
              {mentor.role} @ <strong className="text-gray-900 dark:text-white">{mentor.company}</strong>
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>{mentor.location}</span>
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-0.5">
              <div className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-1">
                <Users className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>{(mentor.totalStudents / 1000).toFixed(1)}k</span>
              </div>
              <p className="text-[11px] font-medium text-gray-500">Total Students</p>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-0.5">
              <div className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-1">
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>{mentor.totalCourses}</span>
              </div>
              <p className="text-[11px] font-medium text-gray-500 font-medium">Courses Taught</p>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-0.5">
              <div className="text-lg font-extrabold text-amber-500 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{mentor.rating.toFixed(1)}</span>
              </div>
              <p className="text-[11px] font-medium text-gray-500">Rating ({mentor.reviewCount})</p>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-0.5">
              <div className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-1">
                <Award className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>{mentor.experienceYears}+ Yrs</span>
              </div>
              <p className="text-[11px] font-medium text-gray-500">Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation & Content */}
      <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <TabsList className="h-auto w-full flex justify-start rounded-xl p-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <TabsTrigger
            value="about"
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition data-[state=active]:bg-indigo-600 data-[state=active]:text-white cursor-pointer text-gray-600 dark:text-gray-400"
          >
            About & Bio
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition data-[state=active]:bg-indigo-600 data-[state=active]:text-white cursor-pointer text-gray-600 dark:text-gray-400"
          >
            Assigned Courses ({mentor.taughtCourses.length})
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition data-[state=active]:bg-indigo-600 data-[state=active]:text-white cursor-pointer text-gray-600 dark:text-gray-400"
          >
            Work History ({mentor.workExperience.length})
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition data-[state=active]:bg-indigo-600 data-[state=active]:text-white cursor-pointer text-gray-600 dark:text-gray-400"
          >
            Student Reviews ({mentor.reviews.length})
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: About & Bio */}
        <TabsContent value="about" className="m-0 space-y-6">
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-6 shadow-xs">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>Biography & Background</span>
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {mentor.aboutText}
              </p>
            </div>

            {/* Skill Pills Grid */}
            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                Core Technical Skills & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-cyan-300 rounded-lg text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Assigned Courses */}
        <TabsContent value="courses" className="m-0 space-y-4">
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Courses Taught by {mentor.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mentor.taughtCourses.map((c) => (
                <div
                  key={c.id}
                  className="p-3 bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 rounded-lg flex gap-3 transition hover:border-indigo-300"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-24 h-20 rounded-md object-cover shrink-0"
                  />
                  <div className="flex-1 space-y-1.5">
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400">
                      {c.category}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2">
                      {c.title}
                    </h4>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-extrabold text-indigo-600 dark:text-cyan-400">
                        ${c.price}
                      </span>
                      <Link href={`/courses/${c.id}`}>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline">
                          View Course →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Work Experience */}
        <TabsContent value="experience" className="m-0 space-y-4">
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-6 shadow-xs">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Work History & Career Timeline
            </h3>

            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-100 dark:before:bg-indigo-900">
              {mentor.workExperience.map((exp) => (
                <div key={exp.id} className="relative pl-8 space-y-1">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 dark:ring-indigo-950" />
                  <div className="flex items-center justify-between flex-wrap">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 pt-1 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 4: Student Reviews */}
        <TabsContent value="reviews" className="m-0 space-y-4">
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>Student Reviews & Testimonials</span>
            </h3>

            <div className="space-y-3">
              {mentor.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 rounded-lg space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.studentAvatar}
                        alt={rev.studentName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-gray-900 dark:text-white">
                          {rev.studentName}
                        </h5>
                        <span className="text-[10px] text-gray-400">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
