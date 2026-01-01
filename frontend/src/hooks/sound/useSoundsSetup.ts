import { useEffect } from "react";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import { SoundService } from "@/services/sound";
import { SoundsAssets } from "@/constants/assets";
import { useSettingsStore } from "@/features/settings";

export function useSoundsSetup() {
  const buttonPressPlayer = useAudioPlayer(SoundsAssets.buttonPress, {
    downloadFirst: true,
  });
  const soundEnabled = useSettingsStore((s) => s.isSoundEnabled);

  useEffect(() => {
    void (async () => {
      try {
        await setAudioModeAsync({
          playsInSilentMode: true,
          interruptionMode: "mixWithOthers",
        });
      } catch {}
    })();

    SoundService.registerPlayer("ButtonClick", buttonPressPlayer);

    return () => {
      SoundService.cleanup();
    };
  }, [buttonPressPlayer]);

  useEffect(() => {
    SoundService.setEnabled(soundEnabled);
  }, [soundEnabled]);
}
