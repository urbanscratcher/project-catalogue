import { create } from "zustand";

interface CopyToasterStore {
  isShown: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCopyToaster = create<CopyToasterStore>((set) => ({
  isShown: false,
  onOpen: () => set({ isShown: true }),
  onClose: () => set({ isShown: false }),
}));

export default useCopyToaster;
