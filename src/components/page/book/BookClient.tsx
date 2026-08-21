'use client'

import React, { useState, useMemo } from 'react'
import BookFilter from './BookFilter'
import { Book } from '@/types/book'
import BookCard from './BookCard'
import { Filter, X } from 'lucide-react'

interface Props {
  books: Book[]
}

const BOOKS_PER_PAGE = 8

export default function BookClient({ books }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
    setCurrentPage(1)
  }

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    )
    setCurrentPage(1)
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]
    )
    setCurrentPage(1)
  }

  const handleClearAll = () => {
    setSelectedCategories([])
    setSelectedRatings([])
    setSelectedLanguages([])
    setCurrentPage(1)
  }

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(book.category)
      const ratingMatch =
        selectedRatings.length === 0 ||
        selectedRatings.some((r) => Number(book.rating) >= r)
      const languageMatch =
        selectedLanguages.length === 0 || selectedLanguages.includes(book.language)

      return categoryMatch && ratingMatch && languageMatch
    })
  }, [books, selectedCategories, selectedRatings, selectedLanguages])

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE)
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE
  const currentBooks = filteredBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE)

  return (
    <div className="w-full space-y-6">
      {/* Header Banner */}
      <div className="bg-indigo-600 dark:bg-indigo-950 rounded-lg p-6 md:p-8 text-white shadow-xs">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Discover Books & E-Books
        </h1>
        <p className="text-xs md:text-sm text-indigo-100 dark:text-gray-300 mt-1">
          Explore top-rated academic, technology, and business books. Order hard copies for delivery or instantly unlock soft-copy E-Books.
        </p>
      </div>

      <div className="flex gap-6 items-start">
        {/* Desktop Sidebar Filter */}
        <div className="hidden md:block">
          <BookFilter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            selectedRatings={selectedRatings}
            onRatingChange={handleRatingChange}
            selectedLanguages={selectedLanguages}
            onLanguageChange={handleLanguageChange}
            onClearAll={handleClearAll}
          />
        </div>

        {/* Mobile Filter Drawer Overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden flex justify-start">
            <div className="bg-white dark:bg-gray-900 w-[280px] h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <BookFilter
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                selectedRatings={selectedRatings}
                onRatingChange={handleRatingChange}
                selectedLanguages={selectedLanguages}
                onLanguageChange={handleLanguageChange}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 space-y-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 rounded-lg shadow-xs">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
              Showing <span className="text-indigo-600 dark:text-cyan-400 font-bold">{currentBooks.length}</span> of <span className="font-bold">{filteredBooks.length}</span> books
            </p>

            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-md text-xs font-semibold"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Book Grid */}
          {currentBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {currentBooks.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
              <p className="text-sm font-semibold text-gray-500">No books match your selected filters</p>
              <button
                onClick={handleClearAll}
                className="mt-2 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-1.5 pt-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border transition ${
                    currentPage === i + 1
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-indigo-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
