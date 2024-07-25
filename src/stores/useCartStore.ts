import { Product } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartState = {
  productsInCart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      productsInCart: [],
      addToCart: (product) =>
        set((state) => {
          const isProductInCart = state.productsInCart.some(
            (p) => p.id === product.id
          )

          if (isProductInCart) {
            // Opcional: incrementar a quantidade se o produto já estiver no carrinho
            // ou exibir uma mensagem de erro/toast
            return state // Retorna o estado inalterado
          }

          return {
            productsInCart: [...state.productsInCart, product],
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          productsInCart: state.productsInCart.filter(
            (product) => product.id !== productId
          ),
        })),
      clearCart: () => set({ productsInCart: [] }),
    }),
    {
      name: 'cart-storage', // nome da chave no localStorage
    }
  )
)
