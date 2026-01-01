"use client";

import { useState } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Course } from "@/types/course";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Props {
  courses: Course[];
}

export default function CoursesClient({ courses }: Props) {
  console.log("----------course-----------", courses);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <div className="flex gap-6 mt-6">
      {/* Sidebar */}
      <div className="hidden md:block w-[290px]">
        <CourseFilter />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Layout switch */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setLayout("grid")}>
            <LayoutGrid />
          </button>
          <button onClick={() => setLayout("list")}>
            <LayoutList />
          </button>
        </div>

        {/* Courses */}
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {courses.map((course) => (
            <CourseCard key={course._id} {...course} layout={layout} />
          ))}
        </div>

        {/* pagination */}

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent className="flex flex-wrap gap-1">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>

              <PaginationItem className="hidden sm:block">
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
