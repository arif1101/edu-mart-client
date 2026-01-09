// import CoursePlayerClient from "@/components/page/enrolledCourse/CoursePlayerClient";

// export default function Page({
//   params,
// }: {
//   params: { id: string };
// }) {
//   console.log("Course ID:", params.id);

//   return <CoursePlayerClient courseId={params.id} />;
// }

import CoursePlayerClient from "@/components/page/enrolledCourse/CoursePlayerClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>; // ✅ params is now a Promise
}) {
  const { id } = await params; // ✅ await params
  
  console.log("Course ID:", id);

  return <CoursePlayerClient courseId={id} />;
}