import { useCartStore } from '@/stores/useCartStore' // caminho para o seu store do Zustand
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export const Cart = () => {
  const { productsInCart, removeFromCart } = useCartStore()

  // Função para calcular o subtotal
  // const calculateSubtotal = () => {
  //   return productsInCart.reduce((total, product) => total + product.price, 0)
  // }

  // const subtotal = calculateSubtotal()
  // const frete = 0
  // const desconto = 30 // Valor fixo de desconto, pode ser dinâmico
  // const total = subtotal - desconto + frete

  return (
    <div className='p-8 bg-white rounded-lg shadow-lg grow'>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-4'>Meu Carrinho</h2>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th className='py-2'>Produto</th>
              <th className='py-2'>Quantidade</th>
              <th className='py-2'>Unitário</th>
              <th className='py-2'>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsInCart.map((product, index) => (
              <tr key={index}>
                <td className='py-2'>
                  <div className='flex items-center gap-4'>
                    <img
                      src={product.thumbnails[0].url}
                      alt={product.thumbnails[0].altText}
                      className={cn(
                        'w-24 h-24 p-2 object-contain rounded-md',
                        product.thumbnails[0].bgColor
                      )}
                    />
                    <div>
                      <p className='font-bold'>{product.name}</p>
                      <p className='text-sm text-gray-500'>
                        Cor: {product.colors[0].label}
                      </p>
                      <p className='text-sm text-gray-500'>
                        Tamanho: {product.sizes[0]}
                      </p>
                      <Button
                        variant='link'
                        onClick={() => removeFromCart(product.id)}
                        className='text-sm text-error p-0'
                      >
                        Remover item
                      </Button>
                    </div>
                  </div>
                </td>
                <td className='py-2'>
                  <div className='flex items-center gap-2'>
                    <Button variant='outline'>-</Button>
                    <Input
                      type='number'
                      // value={1}
                      className='max-w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    />
                    <Button variant='outline'>+</Button>
                  </div>
                </td>
                <td className='py-2'>R$ {product.price.toFixed(2)}</td>
                <td className='py-2'>R$ {product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex gap-2 items-end'>
          <div className='space-y-1'>
            <Label htmlFor='discountCode'>Cupom de desconto:</Label>
            <Input
              id='discountCode'
              className='bg-stone-100 border-none'
              placeholder='Insira seu código'
            />
          </div>
          <Button
            variant='ghost'
            className='text-primary hover:text-primary hover:bg-stone-100'
          >
            OK
          </Button>
        </div>

        <div className='flex gap-2 items-end'>
          <div className='space-y-1'>
            <Label htmlFor='zipCode'>Calcular frete:</Label>
            <Input
              id='zipCode'
              className='bg-stone-100 border-none'
              placeholder='Insira seu CEP'
            />
          </div>
          <Button
            variant='ghost'
            className='text-primary hover:text-primary hover:bg-stone-100'
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  )
}
