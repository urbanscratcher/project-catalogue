import { Tag } from "@/@types/schema";
import { create } from "zustand";

interface RoleTagStore {
  selectedRoles: Tag[];
  onSelect: (item: Tag) => void;
  onDeselect: (item: Tag) => void;
  reset: () => void;
}

const useRoleTag = create<RoleTagStore>((set) => ({
  selectedRoles: [],
  onSelect: (item: Tag) => {
    set((state: RoleTagStore) => ({
      selectedRoles: [...state.selectedRoles, item],
    }));
  },
  onDeselect: (item: Tag) => {
    set((state: RoleTagStore) => ({
      selectedRoles: state.selectedRoles.filter(
        (n: Tag) => n.name !== item.name
      ),
    }));
  },
  reset: () => set({ selectedRoles: [] }),
}));

export default useRoleTag;
