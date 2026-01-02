/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";

export default function LessonItem({ lesson }: any) {
  return (
    <div className="flex justify-between items-center rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-muted">
      <span className="line-clamp-1">
        {lesson.title}
      </span>

      {lesson.isPreview && (
        <Badge variant="secondary">Preview</Badge>
      )}
    </div>
  );
}
