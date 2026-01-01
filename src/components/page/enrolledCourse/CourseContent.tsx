import { ScrollArea } from "@/components/ui/scroll-area";
import SectionAccordion from "./SectionItem";
export default function CourseContent() {
  return (
    <div className="h-full">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">
          Course Content
        </h2>
      </div>

      <ScrollArea className="h-[calc(100vh-64px)]">
        <SectionAccordion />
      </ScrollArea>
    </div>
  );
}
