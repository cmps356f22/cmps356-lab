import create from "zustand";
import { persist, devtools } from "zustand/middleware";

import { faker } from "@faker-js/faker";

const categories = ["all", "foo", "bar", "buz", "qux"];
const products = [...Array(50)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.abstract(600, 180, true),
  price: faker.commerce.price(0.1, 99.99),
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

// import { redux } from "zustand/middleware";
// const store = create(redux(reducer, initialState));

const store = (set) => ({
  cart: [],
  products,
  categories,

  increase: (product) =>
    set((state) => {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({
          id: product.id,
          quantity: 1,
          price: product.price,
          name: product.name,
        });
      }
      return { ...state, cart };
    }),

  decrease: (product) =>
    set((state) => {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        if (cart[index].quantity === 1) {
          cart.splice(index, 1);
        } else {
          cart[index].quantity -= 1;
        }
      }

      return { ...state, cart };
    }),

  remove: (id) =>
    set((state) => {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        cart.splice(index, 1);
      }
      return { ...state, cart };
    }),
});

export const useStore = create(devtools(persist(store, { name: "store" })));
