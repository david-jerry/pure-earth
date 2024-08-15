import { create } from "zustand";

export const useStore = create((set) => ({
    heightOfHeadElement: 0,
    setHeightOfHeadElement: (height: number) => set({ heightOfHeadElement: height }),
}))