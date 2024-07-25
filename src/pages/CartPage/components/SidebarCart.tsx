import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
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
      <div className='bg-white p-8 rounded-lg shadow-md flex-1 md:min-w-[334px]'>
        <h2 className='text-zinc-800 text-sm font-bold uppercase'>RESUMO</h2>

        <Separator className='my-5' />

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Frete:</span>
          <span>R$ {frete.toFixed(2)}</span>
        </div>

        <div className='flex justify-between mb-5'>
          <span className='font-medium text-zinc-500'>Desconto:</span>
          <span>R$ {desconto.toFixed(2)}</span>
        </div>

        <div className='flex justify-between font-bold text-lg'>
          <span className='text-gray-800'>Total:</span>
          <span className='text-primary'>R$ {total.toFixed(2)}</span>
        </div>

        <Button className='mt-6 w-full'>Continuar</Button>
      </div>
    </>
  )
}
