import { create } from "zustand";

interface LoadingState {
  open: boolean;
  message: string;
  show: (message?: string) => void;
  hide: () => void;
  setMessage: (msg: string) => void;
}

export const useGlobalLoading = create<LoadingState>((set, get) => ({
  open: false,
  message: "",
  show: (message) => {
    const state = get();
    if (!state.open) {
      set({ open: true, message: message ?? "Đang xử lý..." });
    } else if (message) {
      set({ message });
    }
  },
  hide: () => {
    const state = get();
    if (state.open) {
      set({ open: false, message: "" });
    }
  },
  setMessage: (msg) => {
    const state = get();
    if (state.open) {
      set({ message: msg });
    }
  },
}));
