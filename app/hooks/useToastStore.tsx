import { create } from "zustand";

export const useToastStore = create((set: any) => ({
  show: false,
  showToast: () => set({ show: true }),
  removeToast: () => set({ show: false }),
}));
