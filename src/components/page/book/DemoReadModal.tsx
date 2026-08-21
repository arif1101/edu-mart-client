"use client"

import React from "react"
import { X, BookOpen, Download, FileText } from "lucide-react"
import { Book } from "@/types/book"

interface DemoReadModalProps {
  book: Book
  isOpen: boolean
  onClose: () => void
}

export default function DemoReadModal({ book, isOpen, onClose }: DemoReadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 rounded-md">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                Demo Preview: {book.title}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">By {book.author}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Sample Pages Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-md flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-600 dark:text-cyan-400 shrink-0" />
            <div>
              <span className="font-bold text-gray-900 dark:text-white">Sample Preview (Pages 1 - 5)</span>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                Purchase the Soft Copy E-Book to read the full {book.pages || 350}+ pages or download offline PDF.
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif bg-gray-50 dark:bg-gray-800/30 p-6 rounded-md border border-gray-100 dark:border-gray-800">
            <h4 className="text-base font-bold font-sans text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Chapter 1: Foundations & Fundamentals
            </h4>
            <p>
              Welcome to <strong>{book.title}</strong>. This demo chapter provides a brief introduction into the core concepts discussed throughout this book by {book.author}.
            </p>
            <p>
              {book.details}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="my-6 p-4 border-l-4 border-indigo-600 bg-white dark:bg-gray-900 rounded-r-md italic">
              "Continuous learning and clean structure are the cornerstones of mastery." — {book.author}
            </div>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between">
          <span className="text-[11px] text-gray-500 font-semibold">
            {book.copyType} • ৳{book.softPrice} (E-Book) / ৳{book.hardPrice} (Hard Copy)
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  )
}
