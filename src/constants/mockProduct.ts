import { Product } from '../types'

export const mockProduct: Product = {
  id: '1',
  name: 'Tênis Nike Revolution 6 Next Nature Masculino',
  category: 'Casual',
  brand: 'Nike',
  ref: '38476171',
  rating: 4.7,
  reviews: 90,
  price: 219.0,
  originalPrice: 249.0,
  discount: 12,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  sizes: [39, 40, 41, 42, 43],
  colors: [
    { label: 'vermelho', hex: '#ef4444' },
    { label: 'azul', hex: '#3b82f6' },
    { label: 'cinza', hex: '#6b7280' },
    { label: 'preto', hex: '#000000' },
  ],
  images: [
    {
      url: 'https://via.placeholder.com/400',
      altText: 'Tênis Nike Revolution 6',
    },
  ],
  thumbnails: [
    { url: 'https://via.placeholder.com/100', altText: 'Thumbnail 1' },
    { url: 'https://via.placeholder.com/100', altText: 'Thumbnail 2' },
    { url: 'https://via.placeholder.com/100', altText: 'Thumbnail 3' },
  ],
}
