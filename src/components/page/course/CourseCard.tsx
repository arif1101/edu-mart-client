"use client";

import { Book, Network, Timer, TimerIcon, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CardRating from "@/components/ui/CardRating";

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
    <Link href={`/courses/${_id}`} className="block">
      <div
        className={
          layout === "grid"
            ? "max-w-[290px] w-full bg-white rounded-xl"
            : "max-w-[918px] w-full shadow bg-white rounded-lg flex"
        }
      >
        {layout === "grid" ? (
          <>
            {/* Thumbnail */}
            <div className="relative h-[181.75px] w-full">
              <Image
                src={thumbnail || "/placeholder.jpg"}
                alt={title}
                fill
                className="object-cover rounded-t-xl"
              />
              <p className="absolute top-2 left-2 bg-sky-500 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded">
                {level}
              </p>
            </div>

            {/* Content */}
            <div className="p-4 dark:bg-black dark:border">
              <h1 className="mb-2 md:mb-6 text-lg font-semibold truncate">
                {title}
              </h1>

              <div className="text-sm flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <User className="w-3.5" />
                  <p>{instructor?.name}</p>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <TimerIcon className="w-3.5" />
                    <p>{duration}h</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="w-3.5" />
                    <p>46 lectures</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <CardRating />
                  <h1 className="text-sky-500">{averageRating} TK</h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* List Thumbnail */}
            <div className="relative h-[255px] w-[440px]">
              <Image
                src={thumbnail || "/placeholder.jpg"}
                alt={title}
                fill
                className="object-cover rounded-l-xl"
              />
            </div>

            {/* List Content */}
            <div className="p-4 w-full flex flex-col justify-between dark:bg-black border-2 rounded-r-md">
              <div>
                <h1 className="text-lg font-semibold truncate">{title}</h1>

                <div className="flex justify-between w-[200px]">
                  <div className="flex items-center gap-1">
                    <Timer className="w-3.5" />
                    <p>{duration}h</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Network className="w-3.5" />
                    <p>{level}</p>
                  </div>
                </div>

                <div className="flex max-w-[400px] items-center gap-4">
                  <CardRating />
                  <div className="flex items-center gap-1">
                    <Book className="w-3.5" />
                    <p>46 lectures</p>
                  </div>
                </div>
              </div>

              <p className="line-clamp-2">
                Hands-on data science with Python.
              </p>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <User className="w-3.5" />
                  <p>{instructor?.name}</p>
                </div>
                <h1 className="text-sky-500">{price} TK</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
