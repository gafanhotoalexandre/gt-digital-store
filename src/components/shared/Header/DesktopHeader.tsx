import { ShoppingCartIcon } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { Search } from './Search'
import { Nav } from './Nav'
import { RegisterButton } from '../RegisterButton'
import { LoginButton } from '../LoginButton'

export function DesktopHeader() {
  return (
    <header className='bg-white shadow-md border md:px-[100px] py-8'>
      <div className='mx-auto flex items-center gap-10'>
        <div className='flex-1 flex items-center space-x-4'>
          <img src={logo} alt='Digital Store Logo' className='h-8' />
          <Search />
        </div>

        <div className='flex items-center space-x-16'>
          <div className='space-x-4'>
            <RegisterButton />
            <LoginButton />
          </div>
          <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
        </div>
      </div>

      <Nav />
    </header>
  )
}
