import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { NavBreadcrumbs } from './components/NavBreadcrumbs'
import { Button } from '@/components/ui/button'

import { mockProduct } from '@/constants'
import { Product } from '@/types'
import { Label } from '@/components/ui/label'

import { ProductImages } from './components/ProductImages'
import { ProductInfo } from './components/ProductInfo'
import { ProductPrice } from './components/ProductPrice'
import { BuyButton } from './components/BuyButton'
import { ProductOptions } from './components/ProductOptions'

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

  return (
    <div className='px-5 pt-5 pb-20 md:pb-32 md:px-24 bg-slate-100 flex flex-col gap-5 md:gap-10'>
      <NavBreadcrumbs />

      <section className='flex flex-col md:flex-row gap-10 md:gap-10'>
        <ProductImages
          images={product.images}
          thumbnails={product.thumbnails}
        />

        <div className='w-full md:max-w-md'>
          <ProductInfo product={product} />

          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />

          <div className='mt-5 flex flex-col gap-1'>
            <h3 className='font-bold text-sm text-zinc-500'>
              Descrição do produto
            </h3>
            <p className='text-gray-700'>{product.description}</p>
          </div>

          <ProductOptions
            title='Tamanho'
            items={product.sizes}
            className='mt-8'
            renderItem={(size) => (
              <Button
                key={size}
                variant='outline'
                className='bg-transparent hover:bg-white/75 px-4 py-2 font-bold'
              >
                {size}
              </Button>
            )}
          />

          <ProductOptions
            title='Cor'
            items={product.colors}
            renderItem={({ label, hex }) => (
              <Button
                key={hex}
                style={{ backgroundColor: `${hex}` }}
                className='w-8 h-8 rounded-full transition hover:opacity-85'
              >
                <Label className='sr-only'>{label}</Label>
              </Button>
            )}
          />

          <BuyButton />
        </div>
      </section>
    </div>
  )
}
