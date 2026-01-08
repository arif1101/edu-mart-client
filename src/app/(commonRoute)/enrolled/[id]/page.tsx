import CoursePlayerClient from "@/components/page/enrolledCourse/CoursePlayerClient";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  console.log("Course ID:", params.id);

  return <CoursePlayerClient courseId={params.id} />;
}
