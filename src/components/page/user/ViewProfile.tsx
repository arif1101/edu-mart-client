"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Edit3, BookOpen, GraduationCap, Award, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { mockBooks } from "@/data/mockData";

interface ViewProfileProps {
  user: any;
  onEdit: () => void;
}

export default function ViewProfile({ user, onEdit }: ViewProfileProps) {
  const [activeTab, setActiveTab] = useState<"OVERVIEW" | "EBOOKS" | "SECURITY">("OVERVIEW");
  const purchasedEbooks = mockBooks.slice(0, 2);

  return (
    <div className="w-full space-y-6 py-4">
      {/* Top Profile Header Banner */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-xs">
        {/* Cover Graphic Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-slate-900 h-36 relative p-6 flex items-end justify-end">
          <button
            onClick={onEdit}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white text-xs font-bold rounded-md border border-white/20 transition flex items-center gap-1.5 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* User Info Bar with Overlapping Avatar */}
        <div className="p-6 pt-0 relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12 sm:-mt-10">
            <div className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 bg-indigo-50 dark:bg-gray-800 shadow-md overflow-hidden shrink-0">
              {user?.picture ? (
                <Image
                  src={user.picture}
                  alt={user.name || "User"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-cyan-400">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {user?.name || "Student Name"}
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle className="w-3 h-3" />
                  Verified {user?.role || "Student"}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email || "student@edumart.com"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Personal Information Card */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
            Personal Information
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-400 block text-[11px]">Email Address</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{user?.email || "N/A"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-400 block text-[11px]">Phone Number</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{user?.phone || "+880 1700-000000"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-400 block text-[11px]">Location / Address</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{user?.address || "Dhaka, Bangladesh"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-400 block text-[11px]">Account Role</span>
                <span className="font-bold text-gray-800 dark:text-gray-200 capitalize">{user?.role || "Student"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Profile Tabs */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-xs">
            {/* Tab Controls */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40">
              {[
                { id: "OVERVIEW", label: "Overview Stats" },
                { id: "EBOOKS", label: `My E-Books (${purchasedEbooks.length})` },
                { id: "SECURITY", label: "Security & Passwords" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-3 text-xs font-bold transition cursor-pointer border-b-2 ${
                    activeTab === tab.id
                      ? "border-indigo-600 text-indigo-600 dark:text-cyan-400 dark:border-cyan-400 bg-white dark:bg-gray-900"
                      : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-5 text-xs">
              {activeTab === "OVERVIEW" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md">
                      <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400 mb-2" />
                      <span className="text-gray-400 font-semibold block text-[11px]">Enrolled Courses</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">1 Course</span>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md">
                      <Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400 mb-2" />
                      <span className="text-gray-400 font-semibold block text-[11px]">AI Exams Completed</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">3 Exams</span>
                    </div>
                  </div>

                  <div className="p-4 bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-md flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Ready for your next learning step?</h4>
                      <p className="text-[11px] text-gray-500">Continue course lessons or test your skills with AI exams.</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === "EBOOKS" && (
                <div className="space-y-3">
                  {purchasedEbooks.map((b) => (
                    <div key={b._id} className="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{b.title}</h4>
                          <p className="text-[11px] text-gray-500">By {b.author} • {b.pages || 350} Pages</p>
                        </div>
                      </div>
                      <a
                        href={b.demoPdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition"
                      >
                        Read PDF
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "SECURITY" && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md space-y-3">
                    <h4 className="font-bold text-gray-900 dark:text-white">Password & Authentication</h4>
                    <p className="text-gray-500 text-[11px]">Keep your account secure with regular password updates.</p>
                    <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-semibold rounded-md">
                      Change Password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
