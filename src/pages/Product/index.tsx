import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { NavBreadcrumbs } from './components/NavBreadcrumbs'
import { Button } from '@/components/ui/button'

import { mockProduct } from '@/constants'
import { Product } from '@/types'
import { Label } from '@/components/ui/label'

export function ProductPage() {
  const { pathname } = useLocation()
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // simulando chamada a api
    setProduct(mockProduct)
  }, [id])

  if (!product) {
    return <p>Carregando...</p>
  }
  // Cálculo do preço com desconto
  const discountedPrice = product.discount
    ? product.originalPrice - (product.originalPrice * product.discount) / 100
    : product.price

  return (
    <div className='px-5 pt-5 pb-20 md:pb-32 md:px-24 bg-slate-100 flex flex-col gap-10'>
      <NavBreadcrumbs />

      <section className='flex flex-col md:flex-row gap-10 md:gap-10'>
        <div className='w-full md:w-1/2 flex flex-col gap-5'>
          <img
            src={product.images[0].url}
            alt={product.images[0].altText}
            className='w-full rounded-lg shadow-md'
          />
          <div className='flex justify-center gap-2'>
            {product.thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail.url}
                alt={thumbnail.altText}
                className='w-20 h-20 object-cover border rounded-md cursor-pointer'
              />
            ))}
          </div>
        </div>

        <div className='w-full md:max-w-md'>
          <h1 className='text-2xl md:text-4xl font-bold text-zinc-800'>
            {product.name}
          </h1>
          <p className='text-gray-500 text-xs mt-2'>
            {product.category} | {product.brand} | REF: {product.ref}
          </p>
          <div className='flex items-center gap-2 mt-2'>
            <span className='text-yellow-500'>★★★★☆</span>
            <Badge className='bg-amber-500 hover:bg-amber-500/90 rounded-sm'>
              {product.rating} ★
            </Badge>
            <span className='text-gray-400'>
              ({product.reviews} avaliações)
            </span>
          </div>
          <div className='flex items-end mt-4'>
            <span className='text-base font-semibold text-zinc-700'>
              R${' '}
              <span className='text-4xl'>
                {discountedPrice.toFixed(2).split('.')[0]},
                <span className='text-2xl'>
                  {discountedPrice.toFixed(2).split('.')[1]}
                </span>
              </span>
            </span>
            {product.originalPrice && (
              <span className='line-through ml-2 text-gray-500'>
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.discount && (
            <div className='mt-1 text-sm text-green-600'>
              {product.discount}% de desconto
            </div>
          )}

          <div className='mt-5 flex flex-col gap-1'>
            <h3 className='font-bold text-sm text-zinc-500'>
              Descrição do produto
            </h3>
            <p className='text-gray-700'>{product.description}</p>
          </div>

          <div className='mt-8'>
            <h3 className='font-bold text-sm text-zinc-500'>Tamanho</h3>
            <div className='flex gap-2 mt-2 text-zinc-600'>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant='outline'
                  className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className='mt-3'>
            <h3 className='font-bold text-sm text-zinc-500'>Cor</h3>

            <div className='flex gap-3 mt-2'>
              {product.colors.map(({ label, hex }) => (
                <Button
                  key={hex}
                  style={{ backgroundColor: `${hex}` }}
                  className='w-8 h-8 rounded-full transition hover:opacity-85'
                >
                  <Label className='sr-only'>{label}</Label>
                </Button>
              ))}
            </div>
          </div>

          <Button className='mt-7 w-full md:max-w-56 bg-yellow-500 hover:bg-yellow-500/90 text-white font-bold py-2 rounded-md text-base'>
            COMPRAR
          </Button>
        </div>
      </section>
    </div>
  )
}
