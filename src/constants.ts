import shoeImage from '@/assets/hero_section_shoe.svg'
import ornamentImage from '@/assets/ornament.svg'

// CollectionItem
import supremeImage from '@/assets/supreme_image.png'
import adidasImage from '@/assets/adidas_image.svg'
import beatsImage from '@/assets/beats_image.svg'

// CategoryItem
import shirtIcon from '@/assets/featured_icons/shirt.svg'
import pantsIcon from '@/assets/featured_icons/pants.svg'
import capIcon from '@/assets/featured_icons/pants.svg'
import headphonesIcon from '@/assets/featured_icons/headphone.svg'
import shoesIcon from '@/assets/featured_icons/shoe.svg'

import shoeProductImage from '@/assets/product_shoe.svg'

import { Product } from './types'

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Produtos', path: '/produtos' },
  { label: 'Categorias', path: '/categorias' },
  { label: 'Meus Pedidos', path: '/meus-pedidos' },
]

export const FOOTER_INFO_LINKS_1 = [
  'Sobre Drip Store',
  'Segurança',
  'Wishlist',
  'Blog',
  'Trabalhe conosco',
  'Meus Pedidos',
]

export const FOOTER_INFO_LINKS_2 = [
  'Camisetas',
  'Calças',
  'Bonés',
  'Headphones',
  'Tênis',
]

export const BANNER_DATA = [
  {
    title: 'Queima de estoque Nike',
    subtitle: 'Melhores ofertas personalizadas',
    description:
      'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    imageSrc: shoeImage,
    ornamentSrc: ornamentImage,
    altText: 'Nike Shoe',
  },
  // Outros dados mockados para outros banners
]

// Conteúdo de Featured Collections
export const COLLECTION_ITEMS = [
  {
    discount: '30% OFF',
    title: 'Novo drop Supreme',
    imageSrc: supremeImage,
    altText: 'Supreme T-shirt',
  },
  {
    discount: '30% OFF',
    title: 'Coleção Adidas',
    imageSrc: adidasImage,
    altText: 'Adidas Shoes',
  },
  {
    discount: '30% OFF',
    title: 'Novo Beats Bass',
    imageSrc: beatsImage,
    altText: 'Beats Headphones',
  },
]

export const CATEGORY_ITEMS = [
  {
    iconSrc: shirtIcon,
    label: 'Camisetas',
  },
  {
    iconSrc: pantsIcon,
    label: 'Calças',
  },
  {
    iconSrc: capIcon,
    label: 'Bonés',
  },
  {
    iconSrc: headphonesIcon,
    label: 'Headphones',
  },
  {
    iconSrc: shoesIcon,
    label: 'Tênis',
  },
]

// Products
export const PRODUCTS = [
  {
    discount: '30% OFF',
    title: 'K-Swiss V8 - Masculino',
    price: '$100',
    originalPrice: '$200',
    imageSrc: shoeProductImage,
    altText: 'K-Swiss V8 Shoe',
    id: '556901db-813f-47af-b83c-b391d1d8cdaf',
  },
  // Adicionar outros produtos conforme necessário
]

// Product
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
