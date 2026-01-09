/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import CourseTab from "@/components/ui/courseTab";
import {
  CheckCircle,
  Clock,
  Network,
  Play,
  Timer,
  User,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { addCourseToCart, getCart } from "@/lib/cart";
import { getMyEnrollments } from "@/lib/enrollment";
import { Course } from "@/types/course";
import Link from "next/link";

type Props = {
  course: Course;
};

export default function CourseDetails({ course }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkCourseStatus();
  }, [course._id]);

  const checkCourseStatus = async () => {
    try {
      // Check cart
      const cart = await getCart();
      const inCart = cart?.items?.some(
        (item: any) =>
          item.course === course._id || item.course?._id === course._id
      );
      setIsInCart(inCart);

      // Check enrollments
      const enrollments = await getMyEnrollments();
      const enrolled = enrollments.some((enrollment: any) =>
        enrollment.courses?.some((c: any) => c?._id === course._id)
      );
      setIsEnrolled(enrolled);
    } catch (error) {
      console.error("Error checking course status:", error);
    } finally {
      setChecking(false);
    }
  };

  const handleEnroll = async () => {
    if (isInCart) {
      alert("This course is already in your cart!");
      return;
    }

    if (isEnrolled) {
      alert("You are already enrolled in this course!");
      return;
    }

    try {
      setLoading(true);
      await addCourseToCart(course._id);
      setIsInCart(true);
      alert("Course added to cart successfully");
    } catch (error: any) {
      alert(error.message);
      console.log("-----course details--", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <User />
          <h3>{course.studentsEnrolled || 8} students enrolled</h3>
        </div>
        <div className="flex items-center gap-2">
          <Clock />
          <h3>
            Last update{" "}
            {new Date(
              course.lastUpdate || course.updatedAt
            ).toLocaleDateString()}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Network />
          <h3 className="text-purple-500 font-bold">{course.level}</h3>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left */}
        <div className="w-2/3">
          <CourseTab
            course={course}
            overview={course.overview}
            curriculum={course.curriculum || []}
            instructors={course.instructors || []}
          />
        </div>

        {/* Right */}
        <div className="w-1/3 sticky top-6 shadow-md bg-white rounded-xl p-6 border">
          <div
            className="relative h-48 flex items-center justify-center cursor-pointer rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${course.thumbnail})` }}
            onClick={() => setShowModal(true)}
          >
            <Play className="text-4xl z-10" />
          </div>

          <div className="mt-6">
            <div className="text-2xl font-semibold mb-6">৳ {course.price}</div>

            {/* Show different buttons based on status */}
            {isEnrolled ? (
              <Link href={`/enrolled/${course._id}`}>
                <Button className="w-full mb-4 bg-green-600 hover:bg-green-700">
                  Go to Course
                </Button>
              </Link>
            ) : isInCart ? (
              <Link href="/cart">
                <Button className="w-full mb-4 bg-orange-500 hover:bg-orange-600">
                  View in Cart
                </Button>
              </Link>
            ) : (
              <Button
                className="w-full mb-4 bg-sky-500 hover:bg-sky-600 disabled:opacity-50"
                onClick={handleEnroll}
                disabled={loading || checking}
              >
                {checking
                  ? "Checking..."
                  : loading
                  ? "Adding..."
                  : "Enroll Now"}
              </Button>
            )}

            <div className="space-y-2 text-base font-semibold">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                <span>{course.duration || 29.58} hours on-demand video</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>{course.curriculum?.length || 44} lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Certificate of completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ×
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
