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
        set((state) => ({
          productsInCart: [...state.productsInCart, product],
        })),
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
