"use client";

import React, { useState } from "react";
import { Book, Download, BookOpen, FileText } from "lucide-react";
import { mockBooks } from "@/data/mockData";
import DemoReadModal from "../book/DemoReadModal";

export default function MyBooksClient() {
  const purchasedEbooks = mockBooks.slice(0, 2);
  const [readingBook, setReadingBook] = useState<typeof mockBooks[0] | null>(null);

  return (
    <div className="w-full space-y-6 py-4">
      {/* Header Banner */}
      <div className="bg-indigo-600 dark:bg-indigo-950 rounded-lg p-6 md:p-8 text-white shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-cyan-300 text-xs font-semibold mb-2">
          <Book className="w-3.5 h-3.5" />
          Digital Library
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          My E-Books Library
        </h1>
        <p className="text-xs md:text-sm text-indigo-100 dark:text-gray-300 mt-1">
          Access your purchased soft-copy E-Books online or download PDF copies for offline study.
        </p>
      </div>

      {/* Grid of Purchased E-Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {purchasedEbooks.map((book) => (
          <div key={book._id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-28 h-36 bg-gray-100 dark:bg-gray-800 rounded-md p-2 flex items-center justify-center shrink-0">
              <img
                src={book.image}
                alt={book.title}
                className="h-full object-contain shadow-xs"
              />
            </div>

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                <FileText className="w-3 h-3" />
                <span>Soft Copy Unlocked</span>
              </div>

              <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">{book.title}</h3>
              <p className="text-xs text-gray-500">By {book.author} • {book.pages || 350} Pages</p>

              <div className="pt-2 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <button
                  onClick={() => setReadingBook(book)}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Online</span>
                </button>

                <a
                  href={book.demoPdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-xs font-semibold transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Online PDF Reader / Demo Reader Modal */}
      {readingBook && (
        <DemoReadModal
          book={readingBook}
          isOpen={!!readingBook}
          onClose={() => setReadingBook(null)}
        />
      )}
    </div>
  );
}
