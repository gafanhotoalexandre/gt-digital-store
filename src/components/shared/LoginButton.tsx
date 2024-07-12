import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export function LoginButton() {
  return (
    <Button
      className='bg-primary text-white md:w-28 hover:bg-[#e13186]'
      type='submit'
    >
      <Link to='/login' className='hover:text-white'>
        Entrar
      </Link>
    </Button>
  )
}
