import CourseDetails from "@/components/page/course/CourseDetails";
import { mockCourses } from "@/data/mockData";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const course = mockCourses.find((c) => c._id === id) || mockCourses[0];

  return <CourseDetails course={course} />;
}
