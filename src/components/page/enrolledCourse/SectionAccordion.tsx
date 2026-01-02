/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LessonItem from "./LessonItem";

export default function SectionAccordion({ sections, lessons }: any) {
  return (
    <Accordion type="multiple" className="px-2">
      {sections
        .sort((a: any, b: any) => a.order - b.order)
        .map((section: any) => (
          <AccordionItem key={section._id} value={section._id}>
            <AccordionTrigger className="text-sm font-medium">
              {section.title}
            </AccordionTrigger>

            <AccordionContent className="space-y-1">
              {lessons
                .filter((l: any) => l.section === section._id)
                .sort((a: any, b: any) => a.order - b.order)
                .map((lesson: any) => (
                  <LessonItem key={lesson._id} lesson={lesson} />
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
