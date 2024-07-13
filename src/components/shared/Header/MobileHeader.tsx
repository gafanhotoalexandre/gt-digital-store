import { ShoppingCartIcon } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { MobileMenu } from './MobileMenu'
import { Search } from './Search'

export function MobileHeader() {
  return (
    <header className='z-10 bg-white shadow-md border py-8 px-4 md:hidden'>
      <div className='flex items-center justify-between'>
        <MobileMenu />
        <img src={logo} alt='Digital Store Logo' className='h-6' />
        <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
      </div>

      <div className='mt-4'>
        <Search />
      </div>
    </header>
  )
}
