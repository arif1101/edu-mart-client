// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import LessonItem from "./LessonItem";

// export default function SectionAccordion({ sections, lessons }: any) {
//   return (
//     <Accordion type="multiple" className="px-2">
//       {sections
//         .sort((a: any, b: any) => a.order - b.order)
//         .map((section: any) => (
//           <AccordionItem key={section._id} value={section._id}>
//             <AccordionTrigger className="text-sm font-medium">
//               {section.title}
//             </AccordionTrigger>

//             <AccordionContent className="space-y-1">
//               {lessons
//                 .filter((l: any) => l.section === section._id)
//                 .sort((a: any, b: any) => a.order - b.order)
//                 .map((lesson: any) => (
//                   <LessonItem key={lesson._id} lesson={lesson} />
//                 ))}
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//     </Accordion>
//   );
// }


"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lesson, Section } from "@/types/course";


interface SectionAccordionProps {
  sections: Section[];
  onLessonSelect: (lesson: Lesson) => void;
  currentLessonId?: string;
}

export default function SectionAccordion({
  sections,
  onLessonSelect,
  currentLessonId,
}: SectionAccordionProps) {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={[sections[0]?._id]}
    >
      {sections
        .sort((a, b) => a.order - b.order)
        .map((section) => (
          <AccordionItem key={section._id} value={section._id}>
            <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
              <div className="flex items-center justify-between w-full pr-2">
                <span className="font-medium text-sm">{section.title}</span>
                <span className="text-xs text-muted-foreground">
                  {section.lessons.length} lesson
                  {section.lessons.length !== 1 ? "s" : ""}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="space-y-1">
                {section.lessons
                  .sort((a, b) => a.order - b.order)
                  .map((lesson) => {
                    const isActive = currentLessonId === lesson._id;

                    return (
                      <button
                        key={lesson._id}
                        onClick={() => onLessonSelect(lesson)}
                        className={cn(
                          "w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors",
                          isActive &&
                            "bg-sky-50 dark:bg-sky-950/30 border-l-2 border-sky-600"
                        )}
                      >
                        <div className="mt-0.5">
                          <PlayCircle
                            className={cn(
                              "h-4 w-4",
                              isActive
                                ? "text-sky-600"
                                : "text-muted-foreground"
                            )}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p
                              className={cn(
                                "text-sm font-medium line-clamp-2",
                                isActive && "text-sky-600"
                              )}
                            >
                              {lesson.title}
                            </p>
                            {lesson.isPreview && (
                              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                <Eye className="h-3 w-3" />
                                Preview
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Lesson {lesson.order}
                          </p>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}