import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeStore {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const useThemeMode = create<ThemeStore>((set) => ({
  mode: "light",
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),
}));
