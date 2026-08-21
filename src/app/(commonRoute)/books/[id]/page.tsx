import React from "react"
import { mockBooks } from "@/data/mockData"
import BookDetailsClient from "@/components/page/book/BookDetailsClient"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BookDetailPage({ params }: PageProps) {
  const { id } = await params
  const book = mockBooks.find((b) => b._id === id) || mockBooks[0]

  if (!book) {
    notFound()
  }

  return (
    <div className="w-full">
      <BookDetailsClient book={book} />
    </div>
  )
}
