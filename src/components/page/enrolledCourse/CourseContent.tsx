/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import SectionAccordion from "./SectionAccordion";
export default function CourseContent({ sections, lessons }: any) {
  return (
    <div className="w-full lg:flex-[1.4] rounded-lg border bg-card">
      <div className="border-b px-4 py-3 text-sm font-semibold text-muted-foreground">
        Course Content
      </div>

      <ScrollArea className="h-[420px]">
        <SectionAccordion sections={sections} lessons={lessons} />
      </ScrollArea>
    </div>
  );
}
