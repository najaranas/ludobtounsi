import { Sound } from "@/types";
import { AudioPlayer } from "expo-audio";

class SoundServiceClass {
  private players: Map<Sound, AudioPlayer> = new Map();
  private isSoundEnabled: boolean = true;
  private isInitialized: boolean = false;

  registerPlayer(key: Sound, player: AudioPlayer) {
    this.players.set(key, player);

    player.volume = 1.0;

    if (!this.isInitialized && this.players.size > 0) {
      this.isInitialized = true;
    }
  }

  setEnabled(enabled: boolean) {
    this.isSoundEnabled = enabled;
  }

  play(key: Sound) {
    if (!this.isSoundEnabled) return;

    const player = this.getPlayer(key);
    if (!player) return;

    void (async () => {
      try {
        await player.seekTo(0);
        player.play();
      } catch (e) {
        console.warn("Sound play error:", e);
      }
    })();
  }

  getPlayer(key: Sound): AudioPlayer | undefined {
    return this.players.get(key);
  }

  cleanup() {
    this.players.clear();
    this.isInitialized = false;
  }
}

export const SoundService = new SoundServiceClass();
