import { create } from "zustand";

type MessageType = "success" | "error" | "info" | "warning";

interface GlobalMessageState {
  open: boolean;
  message: string;
  type: MessageType;
  show: (msg: string, type?: MessageType) => void;
  hide: () => void;
}

export const useGlobalMessage = create<GlobalMessageState>((set) => ({
  open: false,
  message: "",
  type: "info",
  show: (msg, type = "info") => set({ open: true, message: msg, type }),
  hide: () => set({ open: false, message: "", type: "info" }),
}));
