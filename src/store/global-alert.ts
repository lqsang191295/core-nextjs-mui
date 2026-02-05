// store/GlobalAlert.ts
import { create } from "zustand";

interface AlertState {
  open: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
  show: (msg: string, type?: AlertState["type"]) => void;
  hide: () => void;
}

export const useGlobalAlert = create<AlertState>((set) => ({
  open: false,
  message: "",
  type: "info",
  show: (msg, type = "info") => set({ open: true, message: msg, type }),
  hide: () => set({ open: false, message: "", type: "info" }),
}));
