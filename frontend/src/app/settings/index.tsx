import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SafeContent } from "@/components/ui/atoms/SafeContent";
import PageTitle from "@/components/ui/molecules/PageTitle";
import SettingButton from "@/features/settings/components/SettingButton";
import BackButton from "@/components/ui/molecules/BackButton";
import { useSettingsStore } from "@/features/settings/SettingsSlice";

/**
 * SettingsScreen - App configuration
 * Sound, Language, Theme preferences
 */

export default function SettingsScreen() {
  const { soundEnabled, hapticEnabled, toggleSound, toggleHaptic } =
    useSettingsStore();

  return (
    <SafeContent style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <PageTitle title="Settings" />
          <View style={styles.settingsList}>
            <SettingButton
              label="Sound"
              value={soundEnabled}
              onToggle={toggleSound}
            />
            <SettingButton
              label="Vibration"
              value={hapticEnabled}
              onToggle={toggleHaptic}
            />
          </View>
          <BackButton />
        </View>
      </View>
    </SafeContent>
  );
}

const styles = StyleSheet.create((theme) => ({
  safeContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  container: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderRadius: theme.radius.md,
    borderColor: "#EEA12D",
    borderWidth: 1,
    minWidth: "100%",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.accent,
    gap: theme.spacing.md,
    alignItems: "center",
  },
  settingsList: {
    gap: theme.spacing.md,
  },
}));
