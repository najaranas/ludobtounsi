import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SafeContent } from "@/components/ui/atoms/SafeContent";
import { ContentCard } from "@/components/ui/organisms";
import PageTitle from "@/components/ui/molecules/PageTitle";
import SettingButton from "@/features/settings/components/SettingButton";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import { useSettingsActions } from "@/features/settings/hooks";

/**
 * SettingsScreen - App configuration
 * Sound, Haptic
 */
export default function SettingsScreen() {
  const { onToggleSound, onToggleVibration, isSoundEnabled, isHapticEnabled } =
    useSettingsActions();
  return (
    <SafeContent style={styles.safeContainer}>
      <View style={styles.container}>
        <ContentCard>
          <PageTitle title="Settings" />
          <View style={styles.settingsList}>
            <SettingButton
              label="Sound"
              value={isSoundEnabled}
              onToggle={onToggleSound}
            />
            <SettingButton
              label="Vibration"
              value={isHapticEnabled}
              onToggle={onToggleVibration}
            />
          </View>
          <BackButton />
        </ContentCard>
      </View>
    </SafeContent>
  );
}

const styles = StyleSheet.create((theme) => ({
  safeContainer: {
    backgroundColor: theme.colors.ui.overlay,
  },
  container: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsList: {
    gap: theme.spacing.md,
  },
}));
