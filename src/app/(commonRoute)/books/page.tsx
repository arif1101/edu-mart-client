import BookClient from '@/components/page/book/BookClient'
import { getBooks } from '@/lib/book'

export default async function BooksPage() {

  const books = await getBooks()
  
  return (
    <div className="container mx-auto">
      <BookClient books={books.data}/>;
    </div>
  )
}
