import { create } from "zustand";

type TView = "OVERVIEW" | "ALL_ORDERS";

type TNavigationState = {
  activeView: TView;
  setView: (view: TView) => void;
  navigateToOrders: () => void;
  navigateToOverview: () => void;
};

export const useNavigationStore = create<TNavigationState>((set) => ({
  activeView: "OVERVIEW",
  setView: (view) => set({ activeView: view }),
  navigateToOrders: () => set({ activeView: "ALL_ORDERS" }),
  navigateToOverview: () => set({ activeView: "OVERVIEW" }),
}));
