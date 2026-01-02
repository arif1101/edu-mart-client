import CourseContent from "@/components/page/enrolledCourse/CourseContent";
import CourseHeader from "@/components/page/enrolledCourse/CourseHeader";
import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";
import { getCoursePlayerData } from "@/lib/course";

export default async function CoursePlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const { sections, lessons } = await getCoursePlayerData(params.id);

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <VideoPlayer lessons={lessons} />
          <CourseContent sections={sections} lessons={lessons} />
        </div>
      </div>
    </div>
  );
}
