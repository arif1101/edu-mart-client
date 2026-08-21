"use client"

import { ChevronDown, Filter } from "lucide-react"
import React, { useState } from "react"

interface BookFilterProps {
  selectedCategories: string[]
  onCategoryChange: (category: string) => void
  selectedRatings: number[]
  onRatingChange: (rating: number) => void
  selectedLanguages: string[]
  onLanguageChange: (language: string) => void
  onClearAll: () => void
}

export default function BookFilter({
  selectedCategories,
  onCategoryChange,
  selectedRatings,
  onRatingChange,
  selectedLanguages,
  onLanguageChange,
  onClearAll,
}: BookFilterProps) {
  const [openCategory, setOpenCategory] = useState(true)
  const [openRating, setOpenRating] = useState(true)
  const [openLanguage, setOpenLanguage] = useState(true)

  return (
    <aside className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg w-[260px] shrink-0 shadow-xs space-y-5">
      <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
          <Filter className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
          <span>Filters</span>
        </h2>
        <button
          onClick={onClearAll}
          className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div>
        <button
          type="button"
          onClick={() => setOpenCategory(!openCategory)}
          className="w-full flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 mb-2.5 cursor-pointer"
        >
          <span>Category</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${openCategory ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openCategory && (
          <div className="space-y-2 pl-1">
            {["Academic", "Technology", "Business"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => onCategoryChange(cat)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
        <button
          type="button"
          onClick={() => setOpenRating(!openRating)}
          className="w-full flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 mb-2.5 cursor-pointer"
        >
          <span>Rating</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${openRating ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openRating && (
          <div className="space-y-2 pl-1">
            {[4.5, 4.0, 3.5].map((rating) => (
              <label key={rating} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => onRatingChange(rating)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="flex items-center gap-1">
                  <span>★</span>
                  <span>{rating} & above</span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Language */}
      <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
        <button
          type="button"
          onClick={() => setOpenLanguage(!openLanguage)}
          className="w-full flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 mb-2.5 cursor-pointer"
        >
          <span>Language</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${openLanguage ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openLanguage && (
          <div className="space-y-2 pl-1">
            {["English", "Bangla"].map((lang) => (
              <label key={lang} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(lang)}
                  onChange={() => onLanguageChange(lang)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
