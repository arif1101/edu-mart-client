/* eslint-disable @typescript-eslint/no-explicit-any */
// import CourseContent from "@/components/page/enrolledCourse/CourseContent";
// import CourseHeader from "@/components/page/enrolledCourse/CourseHeader";
// import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";
// import { getCoursePlayerData } from "@/lib/course";

import CoursePlayerClient from "@/components/page/enrolledCourse/CoursePlayerClient";

// export default async function CoursePlayerPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { sections, lessons } = await getCoursePlayerData(params.id);
//   console.log("----------sections, lessons-------:",sections, lessons)

//   return (
//     <div className="min-h-screen bg-background">
//       <CourseHeader />

//       <div className="mx-auto max-w-7xl px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <VideoPlayer lessons={lessons} />
//           <CourseContent sections={sections} lessons={lessons} />
//         </div>
//       </div>
//     </div>
//   );
// }



// export default function Page({
//   params,
// }: {
//   params: { id: string };
// }) {
//     console.log("-----------aaaa-------", params.id);
//   console.log("-----------bbbbb-------", params);
//   return <CoursePlayerClient courseId={params.id} />;
// }


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  console.log("-----------aaaa-------", resolvedParams.id);
  console.log("-----------bbbbb-------", resolvedParams);

  return <CoursePlayerClient courseId={resolvedParams.id} />;
}
