import { Cart } from './components/Cart'
import SidebarCart from './components/SidebarCart'

export function CartPage() {
  return (
    <div className='bg-slate-100 px-24 mx-auto py-12 flex flex-col lg:flex-row items-start gap-4'>
      <Cart />
      <SidebarCart />
    </div>
  )
}
