import { Button } from '@/components/ui/button'

import shoeImage from '@/assets/hero_section_shoe.svg' // Substitua pelo caminho correto da sua imagem
import ornamentImage from '@/assets/ornament.svg'

export function HeroSection() {
  return (
    <section className='text-center md:text-start p-5 bg-neutral-100 flex flex-col md:flex-row md:items-center md:justify-between md:py-10 md:px-24 relative overflow-hidden'>
      {/* Artefato */}
      <img
        src={ornamentImage}
        alt='Imagem ornamento, particulas brilhantes'
        className='h-36 w-36 absolute md:top-20 md:right-9 right-0 transform translate-x-1/2 md:translate-x-0 z-0'
      />

      <div className='md:w-1/2 order-2 md:order-1 flex flex-col md:items-start gap-5'>
        <h2 className='text-primary font-bold text-sm md:text-base md:text-amber-500'>
          Melhores ofertas personalizadas
        </h2>
        <h1 className='text-4xl font-bold'>
          Queima de <br /> estoque Nike{' '}
          <span role='img' aria-label='fire'>
            🔥
          </span>
        </h1>
        <p className='text-gray-600'>
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <Button className='text-white px-8 py-3 w-full md:w-56 h-12'>
          Ver Ofertas
        </Button>
      </div>

      <div className='md:w-full md:order-2 z-10'>
        <img src={shoeImage} alt='Nike Shoe' className='w-full h-auto' />
      </div>
    </section>
  )
}
