import { create } from "zustand";

type TSidebarState = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useSidebarStore = create<TSidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
