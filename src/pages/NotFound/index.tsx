import { Button } from '@/components/ui/button'
import notFoundImage from '@/assets/logo.svg' // Substitua pelo caminho correto da sua imagem
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-zinc-100 p-5 md:p-24'>
      <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
        <div className='relative flex-1 flex justify-center mb-10 md:mb-0'>
          {/* Elipse de fundo */}
          <div
            className='absolute top-0 w-full h-[66px] max-w-full rounded-full bg-gradient-to-b from-pink-200 to-transparent opacity-75'
            style={{ aspectRatio: '1 / 1' }}
          />
          <img
            src={notFoundImage}
            alt='Not Found'
            className='w-full h-auto max-w-md relative z-10 px-6 py-1'
          />
        </div>

        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-6xl font-bold text-zinc-800 mb-4'>404</h1>
          <h2 className='text-2xl md:text-4xl font-semibold text-zinc-700 mb-2'>
            Página não encontrada
          </h2>

          <p className='text-zinc-600 mb-6'>
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
          <Link to='/' className='hover:text-white'>
            <Button className='text-white bg-primary py-2 px-4 rounded'>
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
