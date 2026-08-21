import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, Clock, Dock, Play } from "lucide-react";

interface CourseCardProps {
  thumbnail: string;
  title: string;
  description: string;
  videos: number;
  hours: number;
  lessons: number;
  fees: number;
  rating: number;
  link: string; // new prop for course page
}

export default function PopularCourseCard({
  thumbnail,
  title,
  description,
  videos,
  hours,
  lessons,
  fees,
  rating,
  link,
}: CourseCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-xs flex flex-col justify-between hover:border-indigo-500/50 transition">
      <div>
        <div className="relative w-full h-44 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
          <SafeImage
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-gray-950/80 backdrop-blur-xs text-white text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-1">
              <Play className="text-indigo-600 dark:text-cyan-400 w-3.5 h-3.5" />
              <span>{videos} vids</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="text-indigo-600 dark:text-cyan-400 w-3.5 h-3.5" />
              <span>{hours} hrs</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Dock className="text-indigo-600 dark:text-cyan-400 w-3.5 h-3.5" />
              <span>{lessons} lessons</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          ৳{fees}
        </span>
        <Link href={link}>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer">
            <span>Enroll Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
