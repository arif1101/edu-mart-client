"use client";

import { useState, useMemo } from "react";
import {
  LayoutGrid,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { Course } from "@/types/course";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";

const ITEMS_PER_PAGE = 6;

export default function CoursesClient({ courses }: { courses: Course[] }) {
  console.log("CoursesClient rendered with courses:", courses);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);

      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.includes(course.language);

      return categoryMatch && languageMatch;
    });
  }, [courses, selectedCategories, selectedLanguages]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const toggleCategory = (category: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleLanguage = (language: string) => {
    setCurrentPage(1);
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex gap-4 lg:gap-6 mt-6 mb-12 lg:mb-24 max-w-7xl mx-auto">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-[290px] flex-shrink-0">
          <CourseFilter
            selectedCategories={selectedCategories}
            selectedLanguages={selectedLanguages}
            onCategoryChange={toggleCategory}
            onLanguageChange={toggleLanguage}
          />
        </div>

        {/* Mobile Filter Overlay */}
        {showMobileFilter && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
            <div className="fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-gray-900 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilter(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  >
                    <X size={24} />
                  </button>
                </div>
                <CourseFilter
                  selectedCategories={selectedCategories}
                  selectedLanguages={selectedLanguages}
                  onCategoryChange={toggleCategory}
                  onLanguageChange={toggleLanguage}
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with Layout & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilter(true)}
                className="lg:hidden p-2 rounded border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <Filter size={20} />
              </button>

              {/* Layout Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setLayout("grid")}
                  className={`p-2 rounded transition ${
                    layout === "grid"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  aria-label="Grid layout"
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setLayout("list")}
                  className={`p-2 rounded transition ${
                    layout === "list"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  aria-label="List layout"
                >
                  <LayoutList size={20} />
                </button>
              </div>
            </div>

            {/* Results info */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {paginatedCourses.length} of {filteredCourses.length}{" "}
              courses
            </p>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || selectedLanguages.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm"
                >
                  {cat}
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="hover:text-sky-900 dark:hover:text-sky-100"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {selectedLanguages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                >
                  {lang}
                  <button
                    onClick={() => toggleLanguage(lang)}
                    className="hover:text-purple-900 dark:hover:text-purple-100"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Courses Grid/List */}
          {paginatedCourses.length > 0 ? (
            <>
              <div
                className={
                  layout === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
                    : "flex flex-col gap-4 sm:gap-6"
                }
              >
                {paginatedCourses.map((course) => (
                  <CourseCard
                    key={course._id}
                    {...course}
                    instructor={course.instructor ?? course.instructors?.[0]}
                    layout={layout}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                  {/* Previous button */}
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={20} className="mx-auto sm:mx-0" />
                  </button>

                  {/* Page numbers - Hide some on mobile */}
                  <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {getPageNumbers().map((page, index) =>
                      page === "..." ? (
                        <span
                          key={`ellipsis-${index}`}
                          className="px-2 sm:px-3 py-2 text-gray-500"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page as number)}
                          className={`min-w-[40px] px-3 sm:px-4 py-2 rounded border transition ${
                            currentPage === page
                              ? "bg-sky-500 text-white border-sky-500"
                              : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                          aria-label={`Page ${page}`}
                          aria-current={currentPage === page ? "page" : undefined}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  {/* Next button */}
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                  >
                    <ChevronRight size={20} className="mx-auto sm:mx-0" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-500 text-lg sm:text-xl">
                No courses found
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}