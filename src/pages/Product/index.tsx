import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { NavBreadcrumbs } from './components/NavBreadcrumbs'
import { Button } from '@/components/ui/button'

export function ProductPage() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='px-5 pt-5 pb-24 md:pb-32 md:px-24 bg-slate-100 flex flex-col gap-10'>
      <NavBreadcrumbs />

      <section className='flex flex-col md:flex-row gap-6 md:gap-10'>
        <div className='w-full md:w-1/2 flex flex-col gap-5'>
          <img
            src='https://via.placeholder.com/400'
            alt='Product'
            className='w-full rounded-lg shadow-md'
          />
          <div className='flex justify-center gap-2'>
            <img
              src='https://via.placeholder.com/100'
              alt='Thumbnail 1'
              className='w-20 h-20 object-cover border rounded-md cursor-pointer'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Thumbnail 2'
              className='w-20 h-20 object-cover border rounded-md cursor-pointer'
            />
            <img
              src='https://via.placeholder.com/100'
              alt='Thumbnail 3'
              className='w-20 h-20 object-cover border rounded-md cursor-pointer'
            />
          </div>
        </div>

        <div className='w-full md:max-w-md'>
          <h1 className='text-4xl font-bold text-zinc-800'>
            Tênis Nike Revolution 6 Next Nature Masculino
          </h1>
          <p className='text-gray-500 text-xs mt-2'>
            Casual | Nike | REF: 38476171
          </p>
          <div className='flex items-center gap-2 mt-2'>
            <span className='text-yellow-500'>★★★★☆</span>
            <Badge className='bg-amber-500 hover:bg-amber-500/90 rounded-sm'>
              4.7 ★
            </Badge>
            <span className='text-gray-400'>(90 avaliações)</span>
          </div>
          <div className='flex items-end mt-4'>
            <span className='text-base font-semibold text-zinc-700'>
              R${' '}
              <span className='text-4xl'>
                219,<span className='text-2xl'>00</span>
              </span>
            </span>
            <span className='line-through ml-2 text-gray-500'>R$ 219,00</span>
          </div>

          <div className='mt-5 flex flex-col gap-1'>
            <h3 className='font-bold text-sm text-zinc-500'>
              Descrição do produto
            </h3>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className='mt-8'>
            <h3 className='font-bold text-sm text-zinc-500'>Tamanho</h3>
            <div className='flex gap-2 mt-2 text-zinc-600'>
              <Button
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                39
              </Button>
              <Button
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                40
              </Button>
              <Button
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                41
              </Button>
              <Button
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                42
              </Button>
              <Button
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                43
              </Button>
            </div>
          </div>

          <div className='mt-3'>
            <h3 className='font-bold text-sm text-zinc-500'>Cor</h3>
            <div className='flex gap-2 mt-2'>
              <Button className='w-8 h-8 rounded-full bg-red-500 hover:bg-red-500'></Button>
              <Button className='w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-500'></Button>
              <Button className='w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-500'></Button>
              <Button className='w-8 h-8 rounded-full bg-black hover:bg-black'></Button>
            </div>
          </div>

          <Button className='mt-7 w-full max-w-56 bg-yellow-500 hover:bg-yellow-500/90 text-white font-semibold py-2 rounded-md text-base'>
            COMPRAR
          </Button>
        </div>
      </section>
    </div>
  )
}
