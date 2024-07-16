import { Separator } from '@/components/ui/separator'

export function FilterSidebar() {
  return (
    <aside className='w-full md:w-1/4 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0'>
      <h2 className='text-xl font-bold'>Filtrar por</h2>
      <Separator className='my-5' />
      <div className='mb-2'>
        <h3 className='text-lg font-semibold mb-2'>Marca</h3>
        <div className='flex flex-col'>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Adidas
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Balenciaga
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            K-Swiss
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Nike
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Puma
          </label>
        </div>
      </div>
      <div className='mb-2'>
        <h3 className='text-lg font-semibold mb-2'>Categoria</h3>
        <div className='flex flex-col'>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Esporte e lazer
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Casual
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Utilitário
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Corrida
          </label>
        </div>
      </div>
      <div className='mb-2'>
        <h3 className='text-lg font-semibold mb-2'>Gênero</h3>
        <div className='flex flex-col'>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Masculino
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Feminino
          </label>
          <label className='flex items-center mb-2'>
            <input type='checkbox' className='mr-2' />
            Unisex
          </label>
        </div>
      </div>
      <div className='mb-2'>
        <h3 className='text-lg font-semibold mb-2'>Estado</h3>
        <div className='flex flex-col'>
          <label className='flex items-center mb-2'>
            <input type='radio' name='estado' className='mr-2' />
            Novo
          </label>
          <label className='flex items-center mb-2'>
            <input type='radio' name='estado' className='mr-2' />
            Usado
          </label>
        </div>
      </div>
    </aside>
  )
}
