import { ProductItem } from '@/components/shared/ProductItem'
import { Section } from '@/components/shared/Section'
import { PRODUCTS } from '@/constants'

export function TrendingProducts() {
  const [product] = PRODUCTS
  return (
    <Section
      title='Produtos em alta'
      link={{ text: 'Ver todos', href: '#' }}
      className='pb-20 pt-0'
    >
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </Section>
  )
}
