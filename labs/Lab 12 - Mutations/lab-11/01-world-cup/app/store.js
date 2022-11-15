import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set, get) => ({
  schedule: [],
  search: "",

  setSearch: (search) => set((state) => ({ ...state, search })),
});

const useStore = create(persist(store));
export { useStore };
