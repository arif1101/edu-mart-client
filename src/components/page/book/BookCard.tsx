import { Book } from '@/types/book'
import Link from 'next/link'
import React from 'react'

interface Props {
  book: Book
}

export default function BookCard({ book }: Props) {
  const {
    _id,
    title,
    author,
    image,
    rating,
    copyType,
    hardPrice,
    softPrice,
    stock,
  } = book

  const price = copyType === 'Hardcopy' ? hardPrice : softPrice

  return (
    <Link href={`/books/${_id}`}>
      <div className="border max-w-[272px] p-2 rounded-lg">
        <div className="w-full h-[192px] bg-slate-200 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="h-full w-[106px] shadow-lg"
          />
        </div>

        <h1 className="text-base font-semibold mt-3 mb-1">
          {title}
        </h1>

        <p className="text-sm text-gray-500 mb-2">
          By {author}
        </p>

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-sky-500">
            TK {price}
          </h2>
          <span className="text-sm text-green-600">
            Stock: {stock}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-amber-400">
            {'★'.repeat(Math.floor(rating))}
            <span className="text-xs text-gray-500 ml-1">
              ({rating})
            </span>
          </div>

          <span className="text-xs font-medium text-sky-500">
            {copyType}
          </span>
        </div>
      </div>
    </Link>
  )
}
