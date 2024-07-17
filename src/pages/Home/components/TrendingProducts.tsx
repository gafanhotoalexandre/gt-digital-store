import { ArrowRight } from 'lucide-react'

import { ProductItem } from '@/components/shared/ProductItem'
import { Button } from '@/components/ui/button'
import { PRODUCTS } from '@/constants'

export function TrendingProducts() {
  const [product] = PRODUCTS
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
