import { create } from "zustand";

type SidebarState = {
  open: boolean;
  toggle: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  open: true,
  toggle: () => set((s) => ({ open: !s.open })),
  openDrawer: () => set({ open: true }),
  closeDrawer: () => set({ open: false }),
}));
