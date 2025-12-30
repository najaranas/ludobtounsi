import { AppLanguage } from "@/types";
import { create } from "zustand";

interface SettingsState {
  soundEnabled: boolean;
  musicEnabled: boolean;
  hapticEnabled: boolean;
  language: AppLanguage;

  toggleSound: () => void;
  toggleMusic: () => void;
  setLanguage: (language: AppLanguage) => void;
  toggleHaptic: () => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  soundEnabled: true,
  musicEnabled: true,
  hapticEnabled: true,
  language: "en",

  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
  setLanguage: (language) => set({ language }),
  toggleHaptic: () => set((state) => ({ hapticEnabled: !state.hapticEnabled })),
}));
