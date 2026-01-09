/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Book {
  _id: string
  title: string
  author: string
  category: string
  language: string
  details: string
  image: string
  rating: number
  reviews: any[]
  copyType: 'Hardcopy' | 'Softcopy'
  hardPrice: number
  softPrice: number
  stock: number
  publishedDate: string
  createdAt: string
  updatedAt: string
}
