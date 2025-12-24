import CoursesClient from "@/components/page/course/CoursesClient";
import { getCourses } from "@/lib/course";
import type { Course } from "@/types/course";

export default async function CoursesPage() {
  const courses = await getCourses(); // server-side
  return (
    <div className="container mx-auto">
      {" "}
      <CoursesClient courses={courses.data} />;
    </div>
  );
}
