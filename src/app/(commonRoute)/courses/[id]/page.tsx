
import CourseDetails from "@/components/page/course/CourseDetails";
import { getSingleCourse } from "@/lib/course";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const course = await getSingleCourse(id);
  console.log("-------from course detailspage ------", course)

  return <CourseDetails course={course.data} />;
}


