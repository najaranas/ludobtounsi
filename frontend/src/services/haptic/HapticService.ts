import * as Haptics from "expo-haptics";

class HapticServiceClass {
  private isHapticEnabled = true;

  setEnabled(enabled: boolean) {
    this.isHapticEnabled = enabled;
  }

  private async play(action: () => Promise<void>) {
    if (!this.isHapticEnabled) return;
    try {
      await action();
    } catch {}
  }

  buttonPress() {
    this.play(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light));
  }

  diceRoll() {
    this.play(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium));
  }

  movePawn() {
    this.play(() => Haptics.selectionAsync());
  }

  success() {
    this.play(() =>
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    );
  }

  error() {
    this.play(() =>
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    );
  }

  cleanup() {
    this.isHapticEnabled = false;
  }
}

export const HapticService = new HapticServiceClass();
