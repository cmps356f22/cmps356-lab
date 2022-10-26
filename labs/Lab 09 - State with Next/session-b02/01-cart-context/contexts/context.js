import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";

const categories = ["all", "cat", "dog", "lizard", "bird"];
const products = Array.from(Array(50)).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.animals(600, 200, true),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(1, 100),
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
      const newCart = { ...state.cart };
      newCart[action.payload.id] = (newCart[action.payload.id] ?? 0) + 1;
      return { ...state, cart: newCart };
    }
    case "DECREASE": {
      const newCart = { ...state.cart };

      if (newCart[action.payload.id] == 1) {
        delete newCart[action.payload.id];
      } else {
        newCart[action.payload.id] -= 1;
      }

      return { ...state, cart: newCart };
    }
    case "REMOVE": {
      const newCart = { ...state.cart };
      delete newCart[action.payload.id];
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

const storeContext = createContext();
function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cart: {},
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
export { useStoreContext, StoreProvider };
