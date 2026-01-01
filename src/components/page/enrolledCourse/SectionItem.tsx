import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LessonItem from "./LessonItem";

export default function SectionAccordion() {
  return (
    <Accordion type="multiple" className="px-4">
      <AccordionItem value="section-1">
        <AccordionTrigger className="text-sm font-semibold">
          JavaScript Basics
        </AccordionTrigger>

        <AccordionContent className="space-y-2">
          <LessonItem active />
          <LessonItem />
          <LessonItem />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="section-2">
        <AccordionTrigger className="text-sm font-semibold">
          Advanced JavaScript
        </AccordionTrigger>

        <AccordionContent className="space-y-2">
          <LessonItem />
          <LessonItem />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
