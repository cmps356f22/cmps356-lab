import create from "zustand";
import { persist, devtools } from "zustand/middleware";

import { cartStore } from "stores/cart";
import { productStore } from "stores/products";

// import { redux } from "zustand/middleware";
// const useStore = create(redux(reducer, initialState));

// const store = (set) => ({
//   ...initialState,
//   dispatch: (action) => set((state) => reducer(state, action))
// }

export const useStore = create(
  devtools(
    persist(
      (...args) => ({
        ...cartStore(...args),
        ...productStore(...args),
      }),
      { name: "store" }
    )
  )
);

// export const useStore = create(devtools(persist(store, { name: "store" })));
