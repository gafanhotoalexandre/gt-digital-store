import { ShoppingCartIcon } from 'lucide-react'

import { useCartStore } from '@/stores/useCartStore'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function PopoverCart() {
  const productsInCart = useCartStore((state) => state.productsInCart)
  const maxVisibleProducts = 5

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='indicator cursor-pointer'>
          {productsInCart.length > 0 && (
            <Badge
              variant='destructive'
              className='indicator-item badge w-5 border-none text-white font-bold'
            >
              {productsInCart.length}
            </Badge>
          )}
          <ShoppingCartIcon
            className={cn(
              'h-6 w-6 text-gray-700',
              productsInCart.length > 0 && 'text-primary'
            )}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-80 p-4 mt-2 sm:mr-2'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Carrinho</h4>
            <p className='text-sm text-muted-foreground'>
              Produtos adicionados ao carrinho.
            </p>
          </div>
          {productsInCart.length > 0 ? (
            <div className='grid gap-2'>
              {productsInCart
                .slice(0, maxVisibleProducts)
                .map((product, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-3 items-center gap-4'
                  >
                    <div className='col-span-2'>
                      <p className='text-sm font-medium'>{product.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        R${product.price}
                      </p>
                    </div>
                    <img
                      src={product.images[0].url}
                      alt={product.images[0].altText}
                      className='w-12 h-12 object-cover rounded'
                    />
                  </div>
                ))}
              {productsInCart.length > maxVisibleProducts && (
                <p className='text-center text-sm text-muted-foreground'>
                  E mais {productsInCart.length - maxVisibleProducts} produtos.
                  <br />
                  <a href='/carrinho' className='text-primary'>
                    Ver todos no carrinho
                  </a>
                </p>
              )}
            </div>
          ) : (
            <p className='text-center text-sm text-muted-foreground'>
              Seu carrinho está vazio.
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
