import { AppLanguage } from "@/types";
import { create } from "zustand";

import { HapticService } from "@/services/haptic";
import { SoundService } from "@/services/sound";

interface SettingsState {
  isSoundEnabled: boolean;
  isMusicEnabled: boolean;
  isHapticEnabled: boolean;
  language: AppLanguage;

  toggleSound: () => void;
  toggleMusic: () => void;
  setLanguage: (language: AppLanguage) => void;
  toggleHaptic: () => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  isSoundEnabled: true,
  isMusicEnabled: true,
  isHapticEnabled: true,
  language: "en",

  toggleSound: () =>
    set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  toggleMusic: () =>
    set((state) => ({ isMusicEnabled: !state.isMusicEnabled })),
  setLanguage: (language) => set({ language }),
  toggleHaptic: () => {
    set((state) => ({ isHapticEnabled: !state.isHapticEnabled }));
  },
}));

useSettingsStore.subscribe((state, prevState) => {
  if (state.isHapticEnabled !== prevState.isHapticEnabled) {
    HapticService.setEnabled(state.isHapticEnabled);
  }

  if (state.isSoundEnabled !== prevState.isSoundEnabled) {
    SoundService.setEnabled(state.isSoundEnabled);
  }
});
