import { ShoppingCartIcon } from 'lucide-react'

import { MobileMenu } from './MobileMenu'
import { Search } from './Search'
import { Logo } from './Logo'

export function MobileHeader() {
  return (
    <header className='z-10 bg-white shadow-md border py-8 px-4 md:hidden'>
      <div className='flex items-center justify-between'>
        <MobileMenu />
        <Logo />
        <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
      </div>

      <div className='mt-4'>
        <Search />
      </div>
    </header>
  )
}
