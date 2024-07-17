import { ProductItem } from '@/components/shared/ProductItem'
import { FilterSidebar } from './components/FilterSidebar'
import { PRODUCTS } from '@/constants'

export default function ProductsPage() {
  const [product] = PRODUCTS

  return (
    <div className='px-5 pt-9 pb-24 md:pb-32 md:px-24 bg-slate-100'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-zinc-600'>
          <span className='text-base font-bold'>
            Resultados para "Tênis" -{' '}
          </span>
          389 produtos
        </h1>
        {/* <Dropdown
        options={['mais relevantes', 'menor preço', 'maior preço']}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      /> */}
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
