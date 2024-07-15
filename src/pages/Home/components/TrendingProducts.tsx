import { Button } from '@/components/ui/button'

import shoeImage from '@/assets/product_shoe.svg' // Substitua pelo caminho correto da sua imagem
import { ArrowRight } from 'lucide-react'
import DiscountBadge from '@/components/shared/DiscountBadge'

interface ProductItemProps {
  discount?: string
  title: string
  price: string
  originalPrice: string
  imageSrc: string
  altText: string
}

const products: ProductItemProps[] = [
  {
    discount: '30% OFF',
    title: 'K-Swiss V8 - Masculino',
    price: '$100',
    originalPrice: '$200',
    imageSrc: shoeImage,
    altText: 'K-Swiss V8 Shoe',
  },
  // Adicione outros produtos conforme necessário
]

const ProductItem: React.FC<ProductItemProps> = ({
  discount,
  title,
  price,
  originalPrice,
  imageSrc,
  altText,
}) => (
  <div className='flex flex-col'>
    <div className='bg-white p-4 rounded shadow-lg relative'>
      {discount && (
        <DiscountBadge
          discount={discount}
          className='absolute top-4 left-4 w-20 h-8 md:w-24'
        />
      )}
      <img
        src={imageSrc}
        alt={altText}
        className='h-auto md:h-auto rounded-md mt-8 md:mt-auto mb-4'
      />
    </div>

    <div className='mt-4 z-10 relative'>
      <span className='text-xs font-bold text-gray-500'>Tênis</span>
      <h2 className='text-sm md:text-2xl text-zinc-600 font-normal mt-2 block w-full whitespace-nowrap overflow-hidden text-ellipsis'>
        {title}
      </h2>
      <div className='flex items-center mt-2'>
        <span className='line-through text-sm md:text-xl text-zinc-400'>
          {originalPrice}
        </span>
        <span className='text-base md:text-2xl font-bold text-zinc-800 ml-2'>
          {price}
        </span>
      </div>
    </div>
  </div>
)

export function TrendingProducts() {
  const [product] = products
  return (
    <section className='px-5 pb-32 md:px-24 bg-slate-100'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='text-base sm:text-2xl text-zinc-600 font-bold'>
          Produtos em alta
        </h2>
        <Button
          variant={'link'}
          className='text-primary font-normal text-lg flex justify-center items-center gap-2'
        >
          <span>Ver todos</span>
          <ArrowRight width={16} className='font-bold' />
        </Button>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductItem
            key={index}
            discount={product.discount}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            imageSrc={product.imageSrc}
            altText={product.altText}
          />
        ))}
      </div>
    </section>
  )
}
