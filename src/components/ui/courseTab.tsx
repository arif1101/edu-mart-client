import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Box, Plane } from "lucide-react";
import Rating from "./Rating";
import Curriculum from "../page/course/CurriculumList";

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
  overview: Overview;
  curriculum: CurriculumItem[];
  instructors: Instructor[];
};

export default function CourseTab({ overview, curriculum, instructors }: CourseTabProps) {
  
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
            <p className=" text-black/80 text-[14px]">{overview?.description}</p>
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
            <h4 className="font-semibold mt-2 text-[20px]">This course includes:</h4>
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
        <Curriculum curriculum={curriculum}/>
      </TabsContent>
      {/* instructors  */}
      <TabsContent value="tab-3">
        {instructors.map((inst) => (
          <div key={inst._id} className="flex items-center gap-4 mb-4">
            <img src={inst.photo} alt={inst.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{inst.name}</p>
              <p className="text-sm text-muted-foreground">{inst.status}</p>
            </div>
          </div>
        ))}
      </TabsContent>
      {/* rating raeview  */}
      <TabsContent value="tab-4">
          <div className="tab-content border-base-300 bg-base-100">
          <div>
              <div>
                  <h1 className='text-[20px] font-bold'>Reviews</h1>
                  <p className='text-sm text-slate-400'>Total reviews: 0 | Rating: 5.0</p>
              </div>
              <div className='border mt-6 mb-6'></div>
              {/* comment form  */}
              <div className=" mx-auto p-6 bg-gray-100 dark:bg-black rounded-md shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
                  <Rating/>
                  <form>
                      <textarea
                      className="w-full border rounded-md p-3 mb-4 resize-none"
                      placeholder="Write your review..."
                      rows={4}
                      required
                      />

                      <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                      >
                      <Plane />
                      Submit Review
                      </button>
                  </form>
              </div>
              {/* end comment form  */}
              <div className='mt-6'>
              <h1 className='text-[20px] font-semibold'>All Reviews</h1>
              <div className="flex flex-col items-center justify-center h-64 text-center p-4">
              <Box className="w-12 h-12 text-gray-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-800">No Reviews Yet</h2>
              <p className="text-sm text-gray-500">Be the first to share your experience!</p>
              </div>
              </div>
          </div>
          </div>
      </TabsContent>
    </div>

    </Tabs>
  )
}
