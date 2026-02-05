import { create } from "zustand";

interface ConfirmState {
  open: boolean;
  message: string;
  onYes?: () => void;
  onNo?: () => void;
  showConfirm: (msg: string, onYes: () => void, onNo?: () => void) => void;
  hide: () => void;
}

export const useConfirmDialog = create<ConfirmState>((set) => ({
  open: false,
  message: "",
  onYes: undefined,
  onNo: undefined,
  showConfirm: (msg, onYes, onNo) =>
    set({ open: true, message: msg, onYes, onNo }),
  hide: () =>
    set({ open: false, message: "", onYes: undefined, onNo: undefined }),
}));
