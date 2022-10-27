import create from "zustand";

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

const initialState = {
  cart: [],
  products,
  categories,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ id: action.payload.id, quantity: 1 });
      }
      return { ...state, cart };
    }
    case "DECREASE": {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        if (cart[index].quantity === 1) {
          cart.splice(index, 1);
        } else {
          cart[index].quantity -= 1;
        }
      }

      return { ...state, cart };
    }
    case "REMOVE": {
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        cart.splice(index, 1);
      }
      return { ...state, cart };
    }
    default:
      return state;
  }
};

const store = (set) => ({
  ...initialState,

  dispatch: (action) => set((state) => reducer(state, action)),
});

export const useStore = create(store);
