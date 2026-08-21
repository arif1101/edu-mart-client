"use client";

import { Book, Network, Timer, TimerIcon, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CardRating from "@/components/ui/CardRating";
import SafeImage from "@/components/SafeImage";

type CourseCardProps = {
  _id: string;
  title: string;
  level: string;
  instructor?: { name: string; photo?: string; status?: string };
  duration?: number;
  price?: number;
  averageRating?: number;
  layout: "grid" | "list";
  thumbnail?: string;
};

export default function CourseCard({
  _id,
  averageRating,
  title,
  level,
  instructor,
  duration,
  price,
  layout,
  thumbnail,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${_id}`} className="block group w-full">
      <div
        className={
          layout === "grid"
            ? "w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs hover:border-indigo-500/50 transition overflow-hidden flex flex-col justify-between"
            : "w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs hover:border-indigo-500/50 transition overflow-hidden flex flex-col sm:flex-row"
        }
      >
        {layout === "grid" ? (
          <>
            {/* Thumbnail */}
            <div className="relative h-44 w-full bg-gray-100 dark:bg-gray-800">
              <SafeImage
                src={thumbnail || "/placeholder.jpg"}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute top-2.5 left-2.5 bg-indigo-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                {level}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 transition">
                {title}
              </h3>

              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                  <span className="truncate">{instructor?.name || "EduMart Instructor"}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <TimerIcon className="w-3.5 h-3.5" />
                    <span>{duration || 10}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="w-3.5 h-3.5" />
                    <span>24 lessons</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <CardRating />
                  <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400">৳{price || 0}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* List Thumbnail */}
            <div className="relative h-48 sm:h-auto sm:w-64 bg-gray-100 dark:bg-gray-800 shrink-0">
              <SafeImage
                src={thumbnail || "/placeholder.jpg"}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-2.5 left-2.5 bg-indigo-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                {level}
              </span>
            </div>

            {/* List Content */}
            <div className="p-4 w-full flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 transition">{title}</h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <div className="flex items-center gap-1">
                    <Timer className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                    <span>{duration || 10}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Network className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                    <span>{level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                    <span>24 lessons</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">Master essential skills with practical hands-on projects.</p>

              <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{instructor?.name || "EduMart Instructor"}</span>
                </div>
                <span className="text-base font-bold text-indigo-600 dark:text-cyan-400">৳{price || 0}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
