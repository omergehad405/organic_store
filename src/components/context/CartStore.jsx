import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: { ...state.cart, product } })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  increaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decreaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            ({ ...product, quantity: product.quantity + 1 });
          } else {
            return null;
          }
        }
        return product;
      }),
    }));
  },
}));
