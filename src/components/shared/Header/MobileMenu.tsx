import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Nav } from './Nav'
import { RegisterButton } from '../RegisterButton'
import { LoginButton } from '../LoginButton'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className='h-6 w-6 text-gray-700' />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader className='mt-5'>
          <SheetTitle className='text-start'>Páginas</SheetTitle>
        </SheetHeader>
        <section className='h-3/4 flex flex-col'>
          <Nav />

          <Separator className='my-5 bg-gray-300' />
          <SheetFooter className='flex flex-col gap-4 justify-center'>
            <SheetClose asChild>
              <LoginButton />
            </SheetClose>
            <RegisterButton />
          </SheetFooter>
        </section>
      </SheetContent>
    </Sheet>
  )
}
