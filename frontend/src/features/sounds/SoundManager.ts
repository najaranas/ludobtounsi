import { SOUND_FILES, SoundEffect } from "./SoundEffects";

/**
 * SoundManager - Handles all game audio
 * Plays sound effects and background music
 */
class SoundManagerClass {
  private isEnabled: boolean = true;

  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  async play(effect: SoundEffect) {
    if (!this.isEnabled) return;

    const file = SOUND_FILES[effect];
    // TODO: Implement actual audio playback with expo-av
    console.log(`Playing sound: ${file}`);
  }

  async stopAll() {
    // TODO: Implement stop all sounds
  }
}

export const SoundManager = new SoundManagerClass();
