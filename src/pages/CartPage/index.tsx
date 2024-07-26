import { Cart } from './components/Cart'
import { CartMobile } from './components/CartMobile'
import SidebarCart from './components/SidebarCart'

export function CartPage() {
  return (
    <div className='relative bg-slate-100 px-8 md:px-24 mx-auto py-12 flex flex-col lg:flex-row items-start gap-4'>
      <Cart />
      <CartMobile />
      <SidebarCart />
    </div>
  )
}
