import { View } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "@/components/ui/atoms/Text";
import { SafeContent } from "@/components/ui/atoms/SafeContent";
import { useSettingsStore } from "@/store";
import { Button } from "@/components/ui";

/**
 * SettingsScreen - App configuration
 * Sound, Language, Theme preferences
 */
export default function SettingsScreen() {
  const router = useRouter();
  const { soundEnabled, musicEnabled, toggleSound, toggleMusic } =
    useSettingsStore();

  const handleBack = () => {
    router.back();
  };

  const handleApply = () => {
    router.back();
  };

  return (
    <SafeContent style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text variant="h1" style={styles.title}>
              Settings
            </Text>
            <Button onPress={handleBack}>
              <Image
                source={require("@/assets/images/icons/left-arrow.png")}
                style={styles.backIcon}
                contentFit="contain"
              />
            </Button>
          </View>
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
  },
  backIcon: {
    width: theme.spacing.xxxl,
    aspectRatio: 1,
  },
  header: {
    gap: theme.spacing.md,
    alignItems: "center",
  },
  title: {
    color: "#EEA12D",
  },
}));
