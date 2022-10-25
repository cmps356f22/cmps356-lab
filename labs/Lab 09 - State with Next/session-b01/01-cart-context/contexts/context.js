import { useReducer, createContext, useContext } from "react";
import { faker } from "@faker-js/faker";

faker.seed(0);

const categories = ["all", "cat", "dog", "lizard", "bird"];
const products = [...Array(100)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.animals(560, 140, true),
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  price: faker.commerce.price(0, 100),
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY": {
      const index = state.cart.findIndex((item) => item.id === action.payload);

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
              id: action.payload,
              quantity: 1,
            },
          ],
        };
      }
    }
    case "DECREASE_QUANTITY": {
      const index = state.cart.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        const newCart = [...state.cart];

        if (newCart[index].quantity > 1) {
          newCart[index].quantity -= 1;
        } else {
          newCart = newCart.filter((item) => item.id !== action.payload);
        }

        return { ...state, cart: newCart };
      }
    }
    case "REMOVE_ITEM": {
      const newCart = [...state.cart];
      newCart = newCart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

const storeContext = createContext();

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    products,
    categories,
  });

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
}

const useStoreContext = () => useContext(storeContext);

export { StoreProvider, useStoreContext };
