// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { ScrollArea } from "@/components/ui/scroll-area";
// import SectionAccordion from "./SectionAccordion";
// export default function CourseContent({ sections, lessons }: any) {
//   return (
//     <div className="w-full lg:flex-[1.4] rounded-lg border bg-card">
//       <div className="border-b px-4 py-3 text-sm font-semibold text-muted-foreground">
//         Course Content
//       </div>

//       <ScrollArea className="h-[420px]">
//         <SectionAccordion sections={sections} lessons={lessons} />
//       </ScrollArea>
//     </div>
//   );
// }


"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionAccordion from "./SectionAccordion";

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  order: number;
  isPreview: boolean;
}

interface Section {
  _id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

interface CourseContentProps {
  sections: Section[];
  onLessonSelect: (lesson: Lesson) => void;
  currentLessonId?: string;
}

export default function CourseContent({
  sections,
  onLessonSelect,
  currentLessonId,
}: CourseContentProps) {
  const totalLessons = sections.reduce(
    (sum, section) => sum + section.lessons.length,
    0
  );

  return (
    <div className="w-full lg:flex-[1.4] rounded-lg border bg-card">
      <div className="border-b px-4 py-3">
        <h2 className="text-sm font-semibold">Course Content</h2>
        <p className="text-xs text-muted-foreground mt-1">
          {sections.length} sections • {totalLessons} lessons
        </p>
      </div>
      <ScrollArea className="h-[420px]">
        <SectionAccordion
          sections={sections}
          onLessonSelect={onLessonSelect}
          currentLessonId={currentLessonId}
        />
      </ScrollArea>
    </div>
  );
}