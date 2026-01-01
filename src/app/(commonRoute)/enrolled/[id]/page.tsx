import CourseContent from "@/components/page/enrolledCourse/CourseContent";
import LessonHeader from "@/components/page/enrolledCourse/LessonHeader";
import VideoPlayer from "@/components/page/enrolledCourse/VideoPlayer";


export default function CourseVideoPage() {
  return (
    <div className="flex h-screen bg-muted/40">
      {/* Left */}
      <div className="flex-1 p-6">
        <VideoPlayer />
        <LessonHeader />
      </div>

      {/* Right */}
      <div className="w-[380px] border-l bg-background">
        <CourseContent />
      </div>
    </div>
  );
}
