import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export function Search() {
  return (
    <div className='relative w-full md:flex-1'>
      <Input
        type='text'
        placeholder='Pesquisar produto...'
        className='w-full md:flex-1 border-none bg-neutral-200 py-7 placeholder:text-neutral-500'
      />
      <SearchIcon className='absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500' />
    </div>
  )
}
