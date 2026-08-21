import CoursesClient from "@/components/page/course/CoursesClient";
import { mockCourses } from "@/data/mockData";

export default function CoursesPage() {
  return (
    <div className="container mx-auto">
      <CoursesClient courses={mockCourses} />
    </div>
  );
}
