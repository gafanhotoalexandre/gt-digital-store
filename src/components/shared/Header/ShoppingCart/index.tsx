import { useState, useEffect } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'

export function ShoppingCart() {
  // Simulando uma chamada à API para buscar quantidade de produtos no carrinho
  const [productsInCart, setProductsInCart] = useState<number>(0)

  useEffect(() => {
    // Simulação de chamada à API
    const fetchCartItems = async () => {
      const itemsInCart = 2 // Simulação
      setProductsInCart(itemsInCart)
    }

    fetchCartItems()
  }, [])

  return (
    <div className='indicator'>
      {productsInCart > 0 && (
        <Badge
          variant='destructive'
          className='indicator-item badge w-5 border-none text-white font-bold'
        >
          {productsInCart}
        </Badge>
      )}
      <ShoppingCartIcon
        className={cn(
          'h-6 w-6 text-gray-700',
          productsInCart && 'text-primary'
        )}
      />
    </div>
  )
}
