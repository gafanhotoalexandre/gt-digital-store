import { useState } from 'react'

import { Cart } from './components/Cart'
import { CartMobile } from './components/CartMobile'
import SidebarCart from './components/SidebarCart'

export function CartPage() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity(quantity + 1)
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  return (
    <div className='relative bg-slate-100 px-8 md:px-24 mx-auto pt-12 md:pb-12 flex flex-col lg:flex-row items-start gap-4'>
      <Cart
        quantity={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <CartMobile
        quantity={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <SidebarCart />
    </div>
  )
}
