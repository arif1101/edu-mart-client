'use client'

import React, { useState } from 'react'
import BookFilter from './BookFilter'
import { Book } from '@/types/book'
import BookCard from './BookCard'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  books: Book[]
}

const BOOKS_PER_PAGE = 8

export default function BookClient({ books }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE)

  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE
  const endIndex = startIndex + BOOKS_PER_PAGE

  const currentBooks = books.slice(startIndex, endIndex)

  return (
    <div className="flex gap-6 mt-12">
      {/* Left Sidebar */}
      <BookFilter />

      {/* Books + Pagination */}
      <div className="flex-1">
        {/* Book Grid */}
        <div className="grid grid-cols-4 gap-6">
          {currentBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                      )
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  )
}
