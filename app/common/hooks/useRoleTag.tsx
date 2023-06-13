import React from "react";
import { create } from "zustand";

interface RoleTagStore {
  selectedRoles: any[];
  onSelected: (item) => void;
  onDeselected: (item) => void;
}

const useRoleTag = create((set) => ({
  selectedRoles: [],
  onSelected: (item) => {
    set((state) => ({
      selectedRoles: [...state.selectedRoles, item],
    }));
  },
  onDeselected: (state) => set(),
}));

export default useRoleTag;
