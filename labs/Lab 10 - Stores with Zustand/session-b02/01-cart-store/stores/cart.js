export const cartStore = (set, get) => ({
  cart: {},

  cartTotalQuantity: () =>
    Object.values(get().cart).reduce((sum, val) => sum + val.quantity, 0),

  cartTotalPrice: () =>
    Object.entries(get().cart).reduce(
      (sum, [key, val]) => sum + val.quantity * val.price,
      0
    ),

  increase: (product) =>
    set((state) => {
      const newCart = { ...state.cart };
      newCart[product.id] = {
        quantity: (newCart[product.id]?.quantity ?? 0) + 1,
        price: product.price,
        name: product.name,
      };
      return { ...state, cart: newCart };
    }),

  decrease: (product) =>
    set((state) => {
      const newCart = { ...state.cart };

      if (newCart[product.id] == 1) {
        delete newCart[product.id];
      } else {
        newCart[product.id] = {
          quantity: newCart[product.id].quantity - 1,
          price: newCart[product.id].price,
          name: product.name,
        };
      }

      return { ...state, cart: newCart };
    }),

  remove: (id) =>
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[id];
      return { ...state, cart: newCart };
    }),
});
