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
