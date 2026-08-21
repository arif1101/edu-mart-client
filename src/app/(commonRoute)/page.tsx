import PopularCourses from "@/components/page/home/PopularCourses";
import FeatureSection from "@/components/page/home/FeatureSection";
import FindCourseForm from "@/components/page/home/FindCourseForm";
import Hero from "@/components/page/home/hero";
import MeetMyTeam from "@/components/page/home/MeetMyTeam";
import PopularTopics from "@/components/page/home/PopularTopics";
import PopularBooks from "@/components/page/home/PopularBooks";
import Testimonials from "@/components/page/home/Testimonials";
import { mockCourses, mockBooks } from "@/data/mockData";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      <Hero />
      <FindCourseForm />
      <PopularTopics />
      <PopularCourses courses={mockCourses} />
      <MeetMyTeam />
      <FeatureSection />
      <PopularBooks books={mockBooks}/>
      <Testimonials/>
    </div>
  );
}
