import { useState, useMemo, useReducer } from "react";
import "../styles/globals.css";
import Theme from "../themes/theme";
import { faker } from "@faker-js/faker";

const categories = ["cat", "dog", "lizard", "bird"];
const products = Array.from(Array(100)).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.animals(560, 140, true),
  category: categories[Math.floor(Math.random() * categories.length)],
  price: faker.commerce.price(0, 100),
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY": {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        const newState = [...state];
        newState[index].quantity += 1;
        return newState;
      } else {
        return [
          ...state,
          {
            id: action.payload,
            quantity: 1,
          },
        ];
      }
    }
    case "DECREASE_QUANTITY": {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        const newState = [...state];

        if (newState[index].quantity > 1) {
          newState[index].quantity -= 1;
        } else {
          newState = newState.filter((item) => item.id !== action.payload);
        }

        return newState;
      }
    }
    default:
      return state;
  }
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, []);

  // const detailedCart = useMemo(() => {}, [cart]);

  return (
    <Theme>
      <Component
        {...pageProps}
        products={products}
        categories={categories}
        state={state}
        dispatch={dispatch}
      />
    </Theme>
  );
}

export default MyApp;
