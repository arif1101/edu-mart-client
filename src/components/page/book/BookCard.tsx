import { Book } from '@/types/book'
import Link from 'next/link'

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
    <Link href={`/books/${_id}`} className="block group">
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-white dark:bg-gray-900 shadow-xs hover:border-indigo-500/50 transition">
        <div className="w-full h-44 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center p-2 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full object-contain shadow-xs group-hover:scale-105 transition"
          />
        </div>

        <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-3 mb-1 line-clamp-1 group-hover:text-indigo-600 transition">
          {title}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          By {author}
        </p>

        <div className="flex justify-between items-center mb-2">
          <span className="text-base font-bold text-indigo-600 dark:text-cyan-400">
            ৳{price}
          </span>
          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
            Stock: {stock}
          </span>
        </div>

        <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-1 text-amber-400">
            <span>★</span>
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
              {rating}
            </span>
          </div>

          <span className="text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
            {copyType}
          </span>
        </div>
      </div>
    </Link>
  )
}
