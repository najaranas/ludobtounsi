import { useCallback } from "react";
import { SoundEffect, SoundManager } from "../features/sounds";
import { useSettingsStore } from "../store";

/**
 * useSound - Hook for playing sound effects
 * Respects user's sound settings
 */
export function useSound() {
  const soundEnabled = useSettingsStore((state) => state.soundEnabled);

  const playSound = useCallback(
    (effect: SoundEffect) => {
      if (soundEnabled) {
        SoundManager.play(effect);
      }
    },
    [soundEnabled]
  );

  return { playSound };
}
