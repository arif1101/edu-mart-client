import { ChevronDown } from "lucide-react"
import React from "react"

export default function BookFilter() {
  return (
    <div className="min-h-screen p-4 bg-white dark:bg-black dark:border-2 mt-[76px] md:mt-0 w-[290px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="mt-6">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="font-medium">Category</span>
          <ChevronDown size={20} />
        </div>

        <div className="flex flex-col gap-2 pl-2">
          {["Academic", "Technology", "Business"].map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input type="checkbox" />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 border-t pt-4">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="font-medium">Rating</span>
          <ChevronDown size={20} />
        </div>

        <div className="flex flex-col gap-2 pl-2">
          {[3.0, 3.5, 4.0].map((rating) => (
            <label key={rating} className="flex items-center gap-2">
              <input type="checkbox" />
              {rating} & above
            </label>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="mt-6 border-t pt-4">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="font-medium">Language</span>
          <ChevronDown size={20} />
        </div>

        <div className="flex flex-col gap-2 pl-2">
          {["English", "Bangla"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="checkbox" />
              {lang}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
