import create from "zustand";
import { persist } from "zustand/middleware";

// import { redux } from "zustand/middleware";
// const store = create(redux(reducer, initialState));

// const store = (set, get) => ({
//   cart: [],
//   dispatch: (action) => set((state) => reducer(state, action)),
// });

const store = (set, get) => ({
  cart: [],

  increaseQuantity: ({ id, price }) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        const newCart = [...state.cart];
        newCart[index].quantity += 1;
        return { ...state, cart: newCart };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id,
              price,
              quantity: 1,
            },
          ],
        };
      }
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        const newCart = [...state.cart];

        if (newCart[index].quantity > 1) {
          newCart[index].quantity -= 1;
        } else {
          newCart = newCart.filter((item) => item.id !== id);
        }

        return { ...state, cart: newCart };
      }
    }),
  removeItem: (id) =>
    set((state) => {
      const newCart = [...state.cart];
      newCart = newCart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    }),

  cartQuantity: () => get().cart.reduce((acc, val) => acc + val.quantity, 0),
  cartPrice: () =>
    get().cart.reduce((acc, val) => acc + val.quantity * val.price, 0.0),
});

export const useStore = create(persist(store, { name: "cart" }));
