import { useEffect } from "react";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import { SoundService } from "@/services/sound";
import { SoundsAssets } from "@/constants/assets";

export function useSoundsSetup() {
  const buttonPressPlayer = useAudioPlayer(SoundsAssets.buttonPress, {
    downloadFirst: true,
  });

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
}
