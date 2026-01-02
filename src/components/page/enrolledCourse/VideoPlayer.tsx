// "use client";

// import { useState } from "react";

// interface Lesson {
//   _id: string;
//   title: string;
//   videoUrl: string;
// }

// export default function VideoPlayer({ lessons }: { lessons: Lesson[] }) {
//   const [currentLesson, setCurrentLesson] = useState(lessons[0]);

//   return (
//     <div className="w-full lg:flex-[3]">
//       <div className="mb-3 text-lg font-semibold">
//         {currentLesson.title}
//       </div>

//       <div className="aspect-video rounded-lg bg-black overflow-hidden shadow">
//         <iframe
//           key={currentLesson.videoUrl}
//           src={currentLesson.videoUrl}
//           className="w-full h-full"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// }


"use client";

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  order: number;
}

interface VideoPlayerProps {
  lesson: Lesson;
  allLessons: Lesson[];
}

export default function VideoPlayer({ lesson, allLessons }: VideoPlayerProps) {
  return (
    <div className="w-full lg:flex-[3]">
      <div className="mb-3">
        <h1 className="text-xl font-semibold">{lesson.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Lesson {lesson.order} of {allLessons.length}
        </p>
      </div>
      
      <div className="aspect-video rounded-lg bg-black overflow-hidden shadow-lg">
        <iframe
          key={lesson.videoUrl}
          src={lesson.videoUrl}
          className="w-full h-full"
          allowFullScreen
          title={lesson.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}