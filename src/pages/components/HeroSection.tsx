import { Button } from '@/components/ui/button'

import shoeImage from '@/assets/hero_section_shoe.svg' // Substitua pelo caminho correto da sua imagem
import ornamentImage from '@/assets/ornament.svg'

export function HeroSection() {
  return (
    <section className='text-center p-5 bg-neutral-100 flex flex-col md:flex-row md:items-center md:justify-between md:py-20 relative overflow-hidden'>
      {/* Artefato */}
      <img
        src={ornamentImage}
        alt='Imagem ornamento, particulas brilhantes'
        className='h-36 w-36 absolute right-0 transform translate-x-1/2'
      />

      <div className='md:w-1/2 order-2 md:order-1'>
        <h2 className='text-primary font-bold mb-2 text-sm'>
          Melhores ofertas personalizadas
        </h2>
        <h1 className='text-4xl font-bold mb-4'>
          Queima de estoque Nike{' '}
          <span role='img' aria-label='fire'>
            🔥
          </span>
        </h1>
        <p className='text-gray-600 mb-8'>
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <Button className='text-white px-8 py-3 w-full'>Ver Ofertas</Button>
      </div>

      <div className='md:w-1/2'>
        <img src={shoeImage} alt='Nike Shoe' className='w-full h-auto' />
      </div>
    </section>
  )
}
