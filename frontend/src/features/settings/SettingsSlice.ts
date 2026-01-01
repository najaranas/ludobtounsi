import { AppLanguage } from "@/types";
import { create } from "zustand";
import {persist , createJSONStorage } from "zustand/middleware";

import { HapticService } from "@/services/haptic";
import { SoundService } from "@/services/sound";
import {  mmkvStorage } from "@/services/storage";

interface SettingsState {
  isSoundEnabled: boolean;
  isHapticEnabled: boolean;
  language: AppLanguage;

  toggleSound: () => void;
  setLanguage: (language: AppLanguage) => void;
  toggleHaptic: () => void;
}
export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      isSoundEnabled: true,
      isHapticEnabled: true,
      language: "en",

      toggleSound: () =>
        set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
      toggleHaptic: () => {
        set((state) => ({ isHapticEnabled: !state.isHapticEnabled }));
      },
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

useSettingsStore.subscribe((state, prevState) => {
  if (state.isHapticEnabled !== prevState.isHapticEnabled) {
    HapticService.setEnabled(state.isHapticEnabled);
  }

  if (state.isSoundEnabled !== prevState.isSoundEnabled) {
    SoundService.setEnabled(state.isSoundEnabled);
  }
});
