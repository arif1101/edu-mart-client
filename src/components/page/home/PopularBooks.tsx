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

interface Props {
  books: Book[]
}

export default function PopularBooks({ books }: Props) {
  return (
    <div className="relative mt-[150px] mb-[150px]">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Discover <span className="text-sky-500">Popular</span> Books
        </h2>

        <div className="flex items-center gap-3 w-[120px] bg-sky-500 text-white h-11 rounded-xl hover:bg-sky-600">
          <button>View All</button>
          <ArrowRight />
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-5">
          {books.slice(0, 5).map((book) => (
            <CarouselItem
              key={book._id}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  )
}
