import PopularCourses from "@/components/page/home/PopularCourses";
import FeatureSection from "@/components/page/home/FeatureSection";
import FindCourseForm from "@/components/page/home/FindCourseForm";
import Hero from "@/components/page/home/hero";
import MeetMyTeam from "@/components/page/home/MeetMyTeam";
import PopularTopics from "@/components/page/home/PopularTopics";
import { getCourses } from "@/lib/course";
import { getBooks } from "@/lib/book";
import PopularBooks from "@/components/page/home/PopularBooks";
import Testimonials from "@/components/page/home/Testimonials";

export default async function Home() {
  const courses = await getCourses();
  const books = await getBooks();
  // console.log("From home Books :", courses.data);

  return (
    <div className="container mx-auto">
      <Hero />
      <FindCourseForm />
      <PopularTopics />
      <PopularCourses courses={courses.data} />
      <MeetMyTeam />
      <FeatureSection />
      <PopularBooks books={books.data}/>
      <Testimonials/>
    </div>
  );
}
