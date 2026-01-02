"use client";

import { useState } from "react";

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
}

export default function VideoPlayer({ lessons }: { lessons: Lesson[] }) {
  const [currentLesson, setCurrentLesson] = useState(lessons[0]);

  return (
    <div className="w-full lg:flex-[3]">
      <div className="mb-3 text-lg font-semibold">
        {currentLesson.title}
      </div>

      <div className="aspect-video rounded-lg bg-black overflow-hidden shadow">
        <iframe
          key={currentLesson.videoUrl}
          src={currentLesson.videoUrl}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
