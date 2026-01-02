import { Bookmark, Notebook } from "lucide-react";

export default function CourseHeader() {
  return (
    <div className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between">
        <h1 className="text-xl font-semibold text-primary">
          Course Player
        </h1>

        <div className="flex gap-5 text-muted-foreground">
          <Bookmark className="cursor-pointer hover:text-primary" />
          <Notebook className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
}
