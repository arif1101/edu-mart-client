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
    <div className="max-w-sm rounded-2xl shadow-lg bg-white p-4 dark:bg-black">
      <div className="relative w-full h-40 bg-gray-200 rounded-lg">
        <SafeImage
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-lg text-sky-500 font-semibold">
          <span>{rating}</span>
        </div>
        <h2 className="text-2xl font-semibold truncate mt-2 min-h-[2.5em]">
          {title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 min-h-[2.5em] mb-5">
          {description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <Play className="text-sky-500" size={18} />
            <span>{videos} videos</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Clock className="text-sky-500" size={18} />
            <span>{hours} hours</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Dock className="text-sky-500" size={18} />
            <span>{lessons} lessons</span>
          </div>
        </div>

        <div className="w-full border border-sky-500 my-4" />

        <div className="flex justify-between items-center">
          <Link href={link}>
            <button className="flex items-center justify-center gap-2 w-[140px] bg-sky-500 text-white h-11 rounded-3xl hover:bg-sky-600 transition">
              Enroll Now
              <ArrowRight size={20} />
            </button>
          </Link>
          <span className="text-sm border border-black px-3 py-2 rounded-full">
            {fees} tk
          </span>
        </div>
      </div>
    </div>
  );
}
