/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'
import BookCard from '../book/BookCard'
import { Book } from '@/types/book'

import Link from 'next/link'

interface Props {
  books: Book[]
}

export default function PopularBooks({ books }: Props) {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Discover <span className="text-indigo-600 dark:text-cyan-400">Popular</span> Books
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Top academic and skill-building books written by verified authors
          </p>
        </div>

        <Link href="/books">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer">
            <span>View All Books</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {books.slice(0, 6).map((book) => (
            <CarouselItem
              key={book._id}
              className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  )
}
