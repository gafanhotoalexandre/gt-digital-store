import { useState } from 'react'
import { SearchIcon, ShoppingCartIcon } from 'lucide-react'

import { MobileMenu } from './MobileMenu'
import { Search } from './Search'
import { Logo } from '../Logo'
import { Button } from '@/components/ui/button'

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='z-10 bg-white shadow-md border py-8 px-4 md:hidden'>
      <div className='flex items-center justify-between relative'>
        <MobileMenu />
        <Logo
          variant='default'
          className='h-6 flex-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />

        <div className='flex items-center gap-2'>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size='icon'
            variant='ghost'
            className='p-0 text-zinc-700 group focus:bg-transparent'
          >
            <SearchIcon size={20} className='group-focus:text-primary' />
          </Button>

          <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
        </div>
      </div>

      <div className={`mt-5 ${isOpen ? '' : 'hidden'}`}>
        <Search />
      </div>
    </header>
  )
}
