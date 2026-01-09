import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, Plane } from "lucide-react";
import Rating from "./Rating";
import Curriculum from "../page/course/CurriculumList";
import ReviewSection from "../page/course/ReviewSection";
import { Course } from "@/types/course";

type CurriculumItem = {
  title: string;
  contents: string[];
  _id: string;
};

type Instructor = {
  name: string;
  photo: string;
  status: string;
  _id: string;
};

type Overview = {
  description: string;
  requirements: string[];
  thisCourseIncludes: string[];
  whatYouWillLearn: string[];
};

type CourseTabProps = {
  course: Course; // ✅ Add this
  overview: Overview;
  curriculum: CurriculumItem[];
  instructors: Instructor[];
};

export default function CourseTab({
  overview,
  curriculum,
  instructors,
  course
}: CourseTabProps) {
  return (
    <Tabs defaultValue="tab-1" className="">
      <TabsList className="h-auto w-full flex justify-start rounded-none  p-0 bg-slate-100 dark:bg-black mb-4">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Curriculum
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Instructors
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Review&Rating
        </TabsTrigger>
      </TabsList>
      {/* main content here */}
      <div className="p-10 border bg-white dark:bg-black dark:border-2 dark:border-white/20">
        <TabsContent value="tab-1">
          {/* overview  */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Description</h1>
              <p className=" text-black/80 text-[14px]">
                {overview?.description}
              </p>
            </div>
            {/* what you learn  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[20px] font-semibold">what you learn</h1>
              <div className="list-disc list-inside grid grid-cols-2 text-black/80 text-[14px]">
                {overview.whatYouWillLearn.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
            {/* requirements  */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold mt-4 text-[20px]">Requirements:</h4>
              <div className="list-disc list-inside text-black/80 text-[14px]">
                {overview.requirements.map((req, i) => (
                  <p key={i}>{req}</p>
                ))}
              </div>
            </div>
            {/* this course includes  */}
            <div>
              <h4 className="font-semibold mt-2 text-[20px]">
                This course includes:
              </h4>
              <div className="list-disc list-inside grid grid-cols-2 text-black/80 text-[14px]">
                {overview.thisCourseIncludes.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        {/* curriculum  */}
        <TabsContent value="tab-2">
          <h1 className="text-2xl font-bold">Course Content</h1>
          <Curriculum curriculum={curriculum} />
        </TabsContent>
        {/* instructors  */}
        <TabsContent value="tab-3">
          {instructors.map((inst) => (
            <div key={inst._id} className="flex items-center gap-4 mb-4">
              <img
                src={inst.photo}
                alt={inst.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{inst.name}</p>
                <p className="text-sm text-muted-foreground">{inst.status}</p>
              </div>
            </div>
          ))}
        </TabsContent>
        {/* rating raeview  */}

        <TabsContent value="tab-4">
          <ReviewSection
            courseId={course._id}
            averageRating={course.averageRating}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
