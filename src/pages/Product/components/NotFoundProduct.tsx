import { NavBreadcrumbs } from './NavBreadcrumbs'
import { Button } from '@/components/ui/button'

export function NotFoundProduct() {
  return (
    <div className='px-5 pt-5 pb-20 md:pb-28 md:px-24 bg-slate-100 flex flex-col gap-5 md:gap-10'>
      <NavBreadcrumbs />

      <div className='px-4'>
        <div className='text-center space-y-6'>
          <h1 className='text-9xl font-black text-gray-300'>404</h1>

          <h2 className='text-2xl font-bold text-red-400'>
            Produto não encontrado
          </h2>

          <p className='text-gray-700 mt-2'>
            Desculpe, não conseguimos encontrar o produto que você está
            procurando.
          </p>

          <Button
            variant='outline'
            className='bg-transparent'
            onClick={() => window.history.back()}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  )
}
