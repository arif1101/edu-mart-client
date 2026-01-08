"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import SectionAccordion from "./SectionAccordion";
import { Lesson, Section } from "@/types/course";

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
