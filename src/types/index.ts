export type Image = {
  url: string
  altText: string
}

export type Product = {
  id: string
  name: string
  category: string
  brand: string
  ref: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  discount?: number
  description: string
  sizes: number[]
  colors: string[]
  images: Image[]
  thumbnails: Image[]
}
