"use client"

import React, { useState } from "react"
import { Book } from "@/types/book"
import { Star, BookOpen, ShoppingBag, Download, Check, Sparkles, User, FileText, Globe, Award, ChevronRight } from "lucide-react"
import { toast } from "sonner"
import DemoReadModal from "./DemoReadModal"
import Link from "next/link"

interface BookDetailsClientProps {
  book: Book
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  const [activeTab, setActiveTab] = useState<"DESCRIPTION" | "SPECS" | "AUTHOR" | "REVIEWS">("DESCRIPTION")
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isSoftCopyPurchased, setIsSoftCopyPurchased] = useState(false)

  const handleBuySoftCopy = () => {
    setIsSoftCopyPurchased(true)
    toast.success(`"${book.title}" (E-Book) purchased successfully! Saved to your Profile > My E-Books.`)
  }

  const handleBuyHardCopy = () => {
    toast.success(`"${book.title}" (Hard Copy) added to your Cart!`)
  }

  return (
    <div className="w-full space-y-8 py-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/books" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition">Books</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 dark:text-white font-bold truncate max-w-[200px]">{book.title}</span>
      </nav>

      {/* Main Grid Layout (Inspired by reference pattern) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Sticky Cover Image */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-xs sticky top-24">
            <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center p-3 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="h-full object-contain shadow-md rounded-xs"
              />
            </div>
            
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-3">
              <span className="font-semibold">Stock Available:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{book.stock} Copies</span>
            </div>
          </div>
        </div>

        {/* Middle Column: Details & Tabs */}
        <div className="md:col-span-8 lg:col-span-6 space-y-6">
          {/* Header Info */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 text-xs font-semibold mb-2">
              <span>{book.category}</span>
              <span>•</span>
              <span>{book.language}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              {book.title}
            </h1>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">
              By <span className="text-indigo-600 dark:text-cyan-400 font-bold">{book.author}</span>
            </p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{book.rating}</span>
              </div>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {book.reviews.length} Customer Reviews
              </span>
            </div>
          </div>

          {/* Pricing Highlight Box */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Soft Copy (E-Book)</span>
              <div className="text-xl font-bold text-indigo-600 dark:text-cyan-400">৳{book.softPrice}</div>
            </div>

            <div className="h-8 w-px bg-gray-200 dark:bg-gray-800" />

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Hard Copy (Physical)</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white">৳{book.hardPrice}</div>
            </div>
          </div>

          {/* Interactive Book Tabs */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-xs">
            {/* Tab Header */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 overflow-x-auto">
              {[
                { id: "DESCRIPTION", label: "Description" },
                { id: "SPECS", label: "Specifications" },
                { id: "AUTHOR", label: "About Author" },
                { id: "REVIEWS", label: `Reviews (${book.reviews.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-3 text-xs font-bold transition whitespace-nowrap cursor-pointer border-b-2 ${
                    activeTab === tab.id
                      ? "border-indigo-600 text-indigo-600 dark:text-cyan-400 dark:border-cyan-400 bg-indigo-50/50 dark:bg-indigo-950/30"
                      : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Body */}
            <div className="p-5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              {activeTab === "DESCRIPTION" && (
                <div className="space-y-3">
                  <p>{book.details}</p>
                  <p>
                    Published on <strong>{book.publishedDate}</strong> under <strong>{book.publisher || "EduMart Press"}</strong>. Designed to provide hands-on knowledge and real-world clarity.
                  </p>
                </div>
              )}

              {activeTab === "SPECS" && (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-gray-500">Publisher:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{book.publisher || "O'Reilly Media"}</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-gray-500">Pages:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{book.pages || 450} Pages</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-gray-500">Language:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{book.language}</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5">
                    <span className="font-semibold text-gray-500">ISBN:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{book.isbn || "978-0132350884"}</span>
                  </div>
                </div>
              )}

              {activeTab === "AUTHOR" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-cyan-400 font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{book.author}</h4>
                      <p className="text-[11px] text-gray-500">Author & Industry Expert</p>
                    </div>
                  </div>
                  <p>{book.authorBio || `${book.author} is an accomplished author and educator specializing in ${book.category}.`}</p>
                </div>
              )}

              {activeTab === "REVIEWS" && (
                <div className="space-y-4">
                  {book.reviews.length > 0 ? (
                    book.reviews.map((rev) => (
                      <div key={rev.id} className="p-3 bg-gray-50 dark:bg-gray-800/40 rounded-md border border-gray-100 dark:border-gray-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900 dark:text-white">{rev.user}</span>
                          <span className="text-[11px] text-gray-400">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                          {"★".repeat(Math.round(rev.rating))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{rev.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No reviews yet for this book.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sticky Purchase Box Column */}
        <div className="md:col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs sticky top-24 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Book Actions</h3>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Demo</span>
              </button>
            </div>

            {/* Soft Copy / E-Book Direct Purchase Option */}
            <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-md space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                  <span>Soft Copy (E-Book)</span>
                </span>
                <span className="font-bold text-indigo-600 dark:text-cyan-400">৳{book.softPrice}</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">Instant digital access in Profile & PDF download.</p>

              {isSoftCopyPurchased ? (
                <button
                  disabled
                  className="w-full py-2 bg-emerald-600 text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Saved in Profile</span>
                </button>
              ) : (
                <button
                  onClick={handleBuySoftCopy}
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Buy Soft Copy Only</span>
                </button>
              )}
            </div>

            {/* Hard Copy Physical Order Option */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                  <span>Hard Copy (Physical)</span>
                </span>
                <span className="font-bold text-gray-900 dark:text-white">৳{book.hardPrice}</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">Delivered via standard e-commerce shipping.</p>

              <button
                onClick={handleBuyHardCopy}
                className="w-full py-2 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white text-xs font-semibold rounded-md transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Buy Hard Copy</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Demo Read Modal */}
      <DemoReadModal
        book={book}
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  )
}
