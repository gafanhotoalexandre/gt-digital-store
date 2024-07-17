import { ProductItem } from '@/components/shared/ProductItem'
import { FilterSidebar } from './components/FilterSidebar'
import { Dropdown } from './components/Dropdown'
import { FilterSidebarMobile } from './components/FilterSidebarMobile'
import { PRODUCTS } from '@/constants'

const options = [
  { value: 'relevant', label: 'mais relevantes' },
  { value: 'low-to-high', label: 'menor preço' },
  { value: 'high-to-low', label: 'maior preço' },
]
export default function ProductsPage() {
  const [product] = PRODUCTS

  return (
    <div className='px-5 pt-9 pb-24 md:pb-32 md:px-24 bg-slate-100'>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center mb-8'>
        <h1 className='text-zinc-600 order-2 md:order-1'>
          <span className='text-base font-bold'>
            Resultados para "Tênis" -{' '}
          </span>
          389 produtos
        </h1>

        <div className='order-1 md:order-2 flex gap-2'>
          <Dropdown options={options} placeholder='Ordenar por:' />

          <FilterSidebarMobile />
        </div>
      </div>

      <div className='flex flex-col gap-7 md:flex-row md:items-start'>
        <FilterSidebar />

        <div className='grid grid-cols-2 md:grid-cols-3 gap-7 flex-1'>
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
