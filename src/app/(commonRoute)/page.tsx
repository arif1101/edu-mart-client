import PopularCourses from "@/components/page/course/PopularCourses";
import FindCourseForm from "@/components/page/home/FindCourseForm";
import Hero from "@/components/page/home/hero";
import MeetMyTeam from "@/components/page/home/MeetMyTeam";
import PopularTopics from "@/components/page/home/PopularTopics";
import { Button } from "@/components/ui/button";
import { getCourses } from "@/lib/course";
import Image from "next/image";

export default async function Home() {

  const courses = await getCourses()
  console.log("fasdfasdfasdf :",courses.data)
    
  return (
    <div className="container mx-auto">
      <Hero/>
      <FindCourseForm/>
      <PopularTopics/>
      <PopularCourses courses={courses.data} />
      <MeetMyTeam/>
    </div>
  );
}
