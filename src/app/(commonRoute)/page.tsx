import PopularCourses from "@/components/page/course/PopularCourses";
import FeatureSection from "@/components/page/home/FeatureSection";
import FindCourseForm from "@/components/page/home/FindCourseForm";
import Hero from "@/components/page/home/hero";
import MeetMyTeam from "@/components/page/home/MeetMyTeam";
import PopularTopics from "@/components/page/home/PopularTopics";
import { getCourses } from "@/lib/course";

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
      <FeatureSection/>
    </div>
  );
}
