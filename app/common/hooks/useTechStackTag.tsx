import { Tag } from "@/@types/schema";
import { create } from "zustand";

interface TechStackTagStore {
  selectedTechStack: Tag[];
  onSelect: (item: Tag) => void;
  onDeselect: (item: Tag) => void;
  reset: () => void;
}

const useTechStackTag = create<TechStackTagStore>((set) => ({
  selectedTechStack: [],
  onSelect: (item: Tag) => {
    set((state: TechStackTagStore) => ({
      selectedTechStack: [...state.selectedTechStack, item],
    }));
  },
  onDeselect: (item: Tag) => {
    set((state: TechStackTagStore) => ({
      selectedTechStack: state.selectedTechStack.filter(
        (n: Tag) => n.name !== item.name
      ),
    }));
  },
  reset: () => set({ selectedTechStack: [] }),
}));

export default useTechStackTag;
