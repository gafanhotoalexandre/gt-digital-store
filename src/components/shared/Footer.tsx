import { Facebook, Instagram, Twitter } from 'lucide-react'
import logo from '@/assets/logo_footer.svg'
import { Separator } from '../ui/separator'

export function Footer() {
  return (
    <footer className='bg-neutral-900 text-neutral-300 py-8 px-0 md:px-24'>
      <div className='container px-5'>
        <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
          <div className='flex flex-col items-start md:max-w-[307px] '>
            <img src={logo} alt='Digital Store Logo' className='h-8 mb-8' />
            <p className='md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className='flex space-x-4 mt-7'>
              <Facebook className='h-5 w-5 text-neutral-300' />
              <Instagram className='h-5 w-5 text-neutral-300' />
              <Twitter className='h-5 w-5 text-neutral-300' />
            </div>
          </div>

          <div className='mt-10 md:mt-0 flex gap-8 md:gap-0 md:space-x-16'>
            <div className='flex flex-col items-start md:max-w-[135px]'>
              <h3 className='font-semibold mb-7'>Informação</h3>
              <ul className='space-y-2'>
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus Pedidos</li>
              </ul>
            </div>

            <div className='flex flex-col items-start md:max-w-24'>
              <h3 className='font-semibold mb-7'>Informação</h3>
              <ul className='space-y-2'>
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </div>
          </div>

          <div className='mt-8 md:mt-0'>
            <h3 className='font-semibold mb-7'>Contato</h3>
            <address className='not-italic'>
              Av. Santos Dumont, 1510 - 1 andar <br />
              Aldeota, Fortaleza - CE, 60150-161 <br />
              (85) 3051-3411
            </address>
          </div>
        </div>

        <Separator className='mt-8 bg-neutral-700' />
        <div className='text-center pt-4'>&copy; 2022 Digital College</div>
      </div>
    </footer>
  )
}
