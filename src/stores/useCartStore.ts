import { create } from 'zustand'

interface CartState {
  productsInCart: number
  addToCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  productsInCart: 0,
  addToCart: () =>
    set((state) => ({ productsInCart: state.productsInCart + 1 })),
}))
