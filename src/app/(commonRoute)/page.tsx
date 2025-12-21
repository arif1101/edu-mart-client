import FindCourseForm from "@/components/page/home/FindCourseForm";
import Hero from "@/components/page/home/hero";
import PopularTopics from "@/components/page/home/PopularTopics";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero/>
      <FindCourseForm/>
      <PopularTopics/>
    </div>
  );
}
