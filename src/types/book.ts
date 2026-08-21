/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BookReview {
  id: string
  user: string
  rating: number
  comment: string
  date: string
}

export interface Book {
  _id: string
  title: string
  author: string
  authorBio?: string
  category: string
  language: string
  details: string
  image: string
  rating: number
  reviews: BookReview[]
  copyType: 'Hardcopy' | 'Softcopy' | 'Both'
  hardPrice: number
  softPrice: number
  stock: number
  publishedDate: string
  pages?: number
  publisher?: string
  isbn?: string
  demoPdfUrl?: string
  createdAt?: string
  updatedAt?: string
}
