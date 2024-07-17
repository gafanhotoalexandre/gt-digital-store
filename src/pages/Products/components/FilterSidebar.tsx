import { Separator } from '@/components/ui/separator'
import { FilterSection } from './FilterSection'

const brands = ['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma']
const categories = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida']
const genders = ['Masculino', 'Feminino', 'Unisex']
const states = ['Novo', 'Usado']

export function FilterSidebar() {
  return (
    <aside className='w-full md:w-1/4 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0'>
      <h2 className='text-xl font-bold'>Filtrar por</h2>

      <Separator className='my-5' />

      <section className='flex flex-col gap-5'>
        <FilterSection title='Marca' options={brands} inputType='checkbox' />
        <FilterSection
          title='Categoria'
          options={categories}
          inputType='checkbox'
        />
        <FilterSection title='Gênero' options={genders} inputType='checkbox' />
        <FilterSection
          title='Estado'
          options={states}
          inputType='radio'
          name='estado'
        />
      </section>
    </aside>
  )
}
