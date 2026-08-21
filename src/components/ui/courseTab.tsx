"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Check, ShieldCheck } from "lucide-react";
import Curriculum from "../page/course/CurriculumList";
import ReviewSection from "../page/course/ReviewSection";
import { Course } from "@/types/course";

type CurriculumItem = {
  title: string;
  contents: string[];
  _id: string;
};

type Instructor = {
  name: string;
  photo: string;
  status: string;
  _id: string;
};

type Overview = {
  description: string;
  requirements: string[];
  thisCourseIncludes: string[];
  whatYouWillLearn: string[];
};

type CourseTabProps = {
  course: Course;
  overview: Overview;
  curriculum: CurriculumItem[];
  instructors: Instructor[];
};

export default function CourseTab({
  overview,
  curriculum,
  instructors,
  course
}: CourseTabProps) {
  return (
    <Tabs defaultValue="tab-1" className="w-full space-y-4">
      <TabsList className="h-auto w-full flex justify-start rounded-lg p-1 bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800">
        <TabsTrigger
          value="tab-1"
          className="px-4 py-2.5 rounded-md text-xs font-bold transition data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-cyan-400 data-[state=active]:shadow-xs cursor-pointer text-gray-600 dark:text-gray-400"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="px-4 py-2.5 rounded-md text-xs font-bold transition data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-cyan-400 data-[state=active]:shadow-xs cursor-pointer text-gray-600 dark:text-gray-400"
        >
          Curriculum ({curriculum.length})
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="px-4 py-2.5 rounded-md text-xs font-bold transition data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-cyan-400 data-[state=active]:shadow-xs cursor-pointer text-gray-600 dark:text-gray-400"
        >
          Instructors
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="px-4 py-2.5 rounded-md text-xs font-bold transition data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-cyan-400 data-[state=active]:shadow-xs cursor-pointer text-gray-600 dark:text-gray-400"
        >
          Reviews & Ratings
        </TabsTrigger>
      </TabsList>

      {/* Main Tab Content Card */}
      <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xs space-y-6">
        <TabsContent value="tab-1" className="m-0 space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Course Overview</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {overview?.description}
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-md space-y-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>What You Will Learn</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {overview.whatYouWillLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-200">
                  <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Course Requirements</h3>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-gray-600 dark:text-gray-300">
              {overview.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          {/* This Course Includes */}
          <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">This Course Includes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
              {overview.thisCourseIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Curriculum */}
        <TabsContent value="tab-2" className="m-0 space-y-4">
          <h2 className="text-base font-bold text-gray-900 dark:text-white">Detailed Curriculum</h2>
          <Curriculum curriculum={curriculum} />
        </TabsContent>

        {/* Instructors */}
        <TabsContent value="tab-3" className="m-0 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
            <h2 className="text-base font-bold text-gray-900 dark:text-white">
              Meet Your Instructors ({instructors.length})
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Verified Industry Experts
            </span>
          </div>

          <div className="space-y-3">
            {instructors.map((inst) => (
              <div
                key={inst._id}
                className="p-4 bg-gray-50/70 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 transition hover:border-indigo-200 dark:hover:border-indigo-900"
              >
                <img
                  src={
                    inst.photo ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  }
                  alt={inst.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/30 shrink-0 shadow-xs"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {inst.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800">
                      {inst.status || "Lead Instructor"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Senior Industry Educator with 10+ years of domain experience guiding thousands of students worldwide.
                  </p>
                  <div className="flex items-center gap-4 text-[11px] text-gray-500 dark:text-gray-400 pt-1">
                    <span className="flex items-center gap-1 font-semibold text-amber-500">
                      ★ 4.9 Rating
                    </span>
                    <span>•</span>
                    <span>12,450+ Students</span>
                    <span>•</span>
                    <span>18 Courses</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="tab-4" className="m-0 space-y-4">
          <ReviewSection
            courseId={course._id}
            averageRating={course.averageRating}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
