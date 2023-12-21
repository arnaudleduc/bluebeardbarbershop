import { create } from "zustand";

const useNavBarStore = create((set) => ({
  page: "canvas",
  pageToProducts: () =>
    set(() => ({
      page: "products",
    })),
  pageToAdvices: () =>
    set(() => ({
      page: "advices",
    })),
  pageToContact: () =>
    set(() => ({
      page: "contact",
    })),
  pageToIndex: () =>
    set(() => ({
      page: "index",
    })),
}));

export default useNavBarStore;
