import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatCurrencyBRL } from '@/lib/currency'
import { useCartStore } from '@/stores/useCartStore'

export default function SidebarCart() {
  const { productsInCart } = useCartStore()

  const calculateSubtotal = () => {
    return productsInCart.reduce((total, product) => total + product.price, 0)
  }

  const subtotal = calculateSubtotal()
  const frete = 0
  const desconto = 30 // Valor fixo de desconto, pode ser dinâmico
  const total = subtotal - desconto + frete
  return (
    <>
      <div className='bg-white mb-28 p-8 rounded-lg shadow-md w-full flex-1 md:min-w-[334px]'>
        <h2 className='text-zinc-800 text-sm font-bold uppercase'>RESUMO</h2>

        <Separator className='my-5' />

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Subtotal:</span>
          <span className='text-zinc-800'>{formatCurrencyBRL(subtotal)}</span>
        </div>

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Frete:</span>
          <span className='text-zinc-800'>{formatCurrencyBRL(frete)}</span>
        </div>

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Desconto:</span>
          <span className='text-zinc-800'>{formatCurrencyBRL(desconto)}</span>
        </div>

        <div className='flex justify-between font-bold text-lg'>
          <span className='text-zinc-800'>Total:</span>
          <span className='text-error'>{formatCurrencyBRL(total)}</span>
        </div>

        <Button className='mt-6 w-full bg-yellow-500 hover:bg-yellow-500/90'>
          Continuar
        </Button>
      </div>

      {/* MOBILE */}
      <section className='md:hidden sticky bottom-0 left-0 w-full bg-white p-8'>
        <div className='flex justify-between text-lg'>
          <span className='uppercase text-zinc-800 font-bold'>Total</span>
          <span className='text-error font-bold'>
            {formatCurrencyBRL(total)}
          </span>
        </div>

        <Button className='mt-6 w-full bg-yellow-500 hover:bg-yellow-500/90'>
          Continuar
        </Button>
      </section>
    </>
  )
}
