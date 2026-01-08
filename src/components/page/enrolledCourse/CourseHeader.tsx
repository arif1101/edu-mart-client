import { Bookmark, Notebook } from "lucide-react";

interface Course {
  _id: string;
  title: string;
  thumbnail: string;
  instructor: {
    name: string;
    photo: string;
  };
}

interface CourseHeaderProps {
  course: Course;
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-primary">
            {course.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Instructor: {course.instructor.name}
          </p>
        </div>

        <div className="flex gap-5 text-muted-foreground">
          <Bookmark className="cursor-pointer hover:text-primary" />
          <Notebook className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
}
