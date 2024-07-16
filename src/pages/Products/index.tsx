import { ProductItem } from '@/components/shared/ProductItem'
import { FilterSidebar } from './components/FilterSidebar'
import { products } from '@/constants'

export default function ProductsPage() {
  const [product] = products

  return (
    <div className='px-5 py-9 md:px-24 bg-slate-100'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold text-zinc-800'>
          Resultados para "Tênis" - 389 produtos
        </h1>
        {/* <Dropdown
        options={['mais relevantes', 'menor preço', 'maior preço']}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      /> */}
      </div>
      <div className='flex flex-col gap-7 md:flex-row md:items-start'>
        <FilterSidebar />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 flex-1'>
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
