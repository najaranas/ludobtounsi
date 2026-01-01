import { HapticService } from "@/services/haptic";
import { SoundService } from "@/services/sound";
import { useSettingsStore } from "../SettingsSlice";

export default function useSettingsActions() {
  const isSoundEnabled = useSettingsStore((state) => state.isSoundEnabled);
  const isHapticEnabled = useSettingsStore((state) => state.isHapticEnabled);
  const toggleSound = useSettingsStore((state) => state.toggleSound);
  const toggleHaptic = useSettingsStore((state) => state.toggleHaptic);

  const toggleSoundAction = () => {
    toggleSound();
    SoundService.play("ButtonClick");
  };

  const toggleVibrationAction = () => {
    toggleHaptic();
    HapticService.buttonPress();
  };

  return {
    isSoundEnabled,
    isHapticEnabled,

    onToggleSound: toggleSoundAction,
    onToggleVibration: toggleVibrationAction,
  };
}
