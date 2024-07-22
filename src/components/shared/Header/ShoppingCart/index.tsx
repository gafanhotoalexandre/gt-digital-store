import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/useCartStore'

export function ShoppingCart() {
  // Simulando uma chamada à API para buscar quantidade de produtos no carrinho
  const productsInCart = useCartStore((state) => state.productsInCart)

  return (
    <div className='indicator'>
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
  )
}
