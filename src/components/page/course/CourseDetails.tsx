"use client";

import { useState } from "react";
import CourseTab from "@/components/ui/courseTab";
import {
  CheckCircle2,
  Clock,
  Play,
  Timer,
  User,
  Video,
  Star,
  ChevronRight,
  ShieldCheck,
  Globe,
  Sparkles,
  ShoppingBag,
  X
} from "lucide-react";
import { Course } from "@/types/course";
import Link from "next/link";
import { toast } from "sonner";

type Props = {
  course: Course;
};

export default function CourseDetails({ course }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsInCart(true);
    toast.success(`"${course.title}" added to cart successfully!`);
  };

  const courseId = course._id;

  return (
    <div className="w-full space-y-6 py-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/courses" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">Courses</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 dark:text-white font-bold truncate max-w-[200px]">{course.title}</span>
      </nav>

      {/* Header Info Banner */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            {course.tags?.[0] || "Web Development"}
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold">
            {course.level || "All Levels"}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          {course.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-600 dark:text-gray-400 pt-1">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="font-bold text-gray-900 dark:text-white">{course.averageRating || 4.9}</span>
            <span className="text-gray-400">(120 Reviews)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>{course.studentsEnrolled || 1250} Enrolled Students</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Last updated {new Date(course.lastUpdate || course.updatedAt || Date.now()).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>English</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Tabs */}
        <div className="lg:col-span-8">
          <CourseTab
            course={course}
            overview={course.overview}
            curriculum={course.curriculum || []}
            instructors={course.instructors || []}
          />
        </div>

        {/* Right Column: Sticky Purchase Sidebar Card */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 sticky top-24 shadow-xs space-y-5">
            {/* Video Trailer Thumbnail */}
            <div
              className="relative h-44 rounded-md overflow-hidden bg-gray-900 cursor-pointer group flex items-center justify-center"
              onClick={() => setShowModal(true)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white text-[10px] font-bold rounded-md backdrop-blur-xs">
                Preview Course
              </span>
            </div>

            {/* Price & Action CTAs */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">৳{course.price}</span>
                <span className="text-xs text-gray-400 line-through">৳{Math.round(course.price * 1.4)}</span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md ml-auto">
                  30% OFF
                </span>
              </div>

              {isEnrolled ? (
                <Link href={`/enrolled/${courseId}`}>
                  <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs">
                    <span>Go to Course Portal</span>
                  </button>
                </Link>
              ) : isInCart ? (
                <Link href="/cart">
                  <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-md transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs">
                    <ShoppingBag className="w-4 h-4" />
                    <span>View in Cart</span>
                  </button>
                </Link>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={handleEnroll}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-md transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Enroll Now / Add to Cart</span>
                  </button>

                  <Link href="/cart">
                    <button
                      onClick={handleEnroll}
                      className="w-full py-2 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white text-xs font-semibold rounded-md transition cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* What's Included List */}
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-white block">This Course Includes:</span>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>{course.duration || 29.5} hours on-demand video</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>{course.curriculum?.length || 44} curriculum lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Full lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Certificate of completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Trailer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg max-w-3xl w-full p-4 relative shadow-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
              <span className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                Course Trailer: {course.title}
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
