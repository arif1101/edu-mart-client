import BookClient from "@/components/page/book/BookClient"
import { mockBooks } from "@/data/mockData"

export default function BooksPage() {
  return (
    <div className="w-full">
      <BookClient books={mockBooks} />
    </div>
  )
}
