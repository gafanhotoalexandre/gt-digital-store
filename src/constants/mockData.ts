import { shoeProductImage } from './images'
import { Product } from '@/types'
import { PRODUCTS } from './products'
import { getRandomRating, getRandomReviews } from '@/lib/randomize'

const thumbnails = [
  {
    url: shoeProductImage,
    altText: 'Imagem 1 do produto',
    bgColor: 'bg-indigo-100',
  },
  {
    url: shoeProductImage,
    altText: 'Imagem 2 do produto',
    bgColor: 'bg-amber-100',
  },
  {
    url: shoeProductImage,
    altText: 'Imagem 3 do produto',
    bgColor: 'bg-red-100',
  },
  {
    url: shoeProductImage,
    altText: 'Imagem 4 do produto',
    bgColor: 'bg-yellow-600',
  },
  {
    url: shoeProductImage,
    altText: 'Imagem 5 do produto',
    bgColor: 'bg-orange-100',
  },
]

export const MOCK_PRODUCTS: Product[] = PRODUCTS.map((product) => ({
  ...product,
  name: product.title,
  brand: product.title.split(' ')[0],
  ref: `REF-${product.id.slice(0, 5)}`,
  // brand: 'Marca Exemplo', // Valor fictício para brand
  // ref: 'REF' + Math.floor(Math.random() * 10000), // Valor fictício para ref
  rating: getRandomRating(),
  reviews: getRandomReviews(),
  sizes: [38, 39, 40, 41, 42],
  colors: [
    { label: 'vermelho', hex: '#ef4444' },
    { label: 'azul', hex: '#3b82f6' },
    { label: 'cinza', hex: '#6b7280' },
    { label: 'preto', hex: '#000000' },
  ],
  images: [{ url: shoeProductImage, altText: product.altText }],
  thumbnails: thumbnails.slice(0, Math.floor(Math.random() * 3) + 3), // Aleatorizando entre 3 e 5 thumbnails
  description: `${product.title} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  category: product.title,
}))
