import { ArrowRight, Play } from "lucide-react";
import hero1 from "@/assets/video/hero2.mp4";
import hero2 from "@/assets/video/hero1.mp4";
import heroSpinner1 from "@/assets/hero-spinner1.svg"
import heroSpinner2 from "@/assets/hero-spinner2.svg"
import FindCourse from "@/components/home/FindCourse";
import PopularTopics from "@/components/home/PopularTopics";
import PopularCourses from "@/components/home/PopularCourses";
import Mentors from "@/components/home/Mentors";
import FeatureSection from "@/components/home/FeatureSection";
import LearningResources from "@/components/home/LearningResources";
import Testimonials from "@/components/home/Testimonials";
import PopularBooks from "@/components/home/PopularBooks";


export default function HomePage() {
  return (
    <div className="py-[110px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 px-4">
            {/* description section  */}
            <div className="w-full lg:max-w-[618px] pr-0 lg:pr-6 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-bold leading-tight">
            <span className="text-sky-500">Learn</span> the Skills of Tomorrow
            </h1>

            <p className="text-sm md:text-base text-[#434343]">
            Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th. Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
            <div className="flex items-center justify-center gap-1 w-full sm:w-[160.56px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-3xl hover:bg-sky-600">
                <button>Join For Free</button>
                <ArrowRight className="text-[26px] mt-1" />
            </div>
            <div className="flex text-base font-bold w-full sm:w-[247.4px] h-[44px] items-center justify-between">
                <Play className="w-11 h-11 bg-sky-500 text-white p-2 rounded-full" />
                <p>Learn About CustomLMS</p>
            </div>
            </div>
            </div>

            {/* video section  */}
            <div className="relative flex flex-col sm:flex-row max-w-full lg:max-w-[618px] gap-6 items-center justify-center">
            {/* First Video */}
            <video
                className="rounded-b-full w-[250px] md:w-[289px] object-cover max-h-[426px] z-10"
                src={hero2}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
            ></video>

            {/* Second Video */}
            <video
                className="rounded-t-full w-[250px] md:w-[289px] object-cover max-h-[426px] z-10"
                src={hero1}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
            ></video>

            {/* First SVG - Positioned Top Right */}
            <img
                src={heroSpinner2}
                alt="Top Right SVG"
                className="absolute top-[-80px] md:right-[-80px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover animate-spin duration-100"
            />

            {/* Second SVG - Positioned Bottom Left */}
            <img
                src={heroSpinner1}
                alt="Bottom Left SVG"
                className="absolute bottom-[-80px] left-[-80px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover animate-pulse"
            />
            </div>
        </div>

        {/* START FIND-COURSE  */}
        <FindCourse/>

        {/* POPULAR TOPICS */}
        <PopularTopics/>

        {/* POPULAR COURSES  */}
        <PopularCourses/>

        {/* Meet Mentors  */}
        <Mentors/>

        {/* Feature section  */}
        <FeatureSection/>

        {/* Popular Book  */}
        <PopularBooks/>

        {/* Learingn resources section  */}
        <LearningResources/>

        {/* Testimonials section  */}
        <Testimonials/>
    </div>
  )
}
