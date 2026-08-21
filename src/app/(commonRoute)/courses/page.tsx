import CoursesClient from "@/components/page/course/CoursesClient";
import { mockCourses } from "@/data/mockData";

export default function CoursesPage() {
  return <CoursesClient courses={mockCourses} />;
}
