import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ScreenContainer } from "@/components/ui/templates/ScreenContainer";
import { SafeContent } from "@/components/ui/atoms/SafeContent";
import {
  HomeAssets,
  HomeLogo,
  QuickActionsToolbar,
  GameModeSelection,
  useHomeNavigation,
  GAME_MODE_CONFIGS,
  QUICK_ACTION_CONFIGS,
} from "@/features/home";

export default function HomeScreen() {
  const { navigateToGameMode, handleQuickAction } = useHomeNavigation();

  return (
    <ScreenContainer backgroundSource={HomeAssets.backgrounds.main}>
      <SafeContent style={styles.content}>
        <QuickActionsToolbar
          actions={QUICK_ACTION_CONFIGS}
          onActionPress={handleQuickAction}
        />
        <View style={styles.centerSection}>
          <HomeLogo />
        </View>
        <View style={[styles.centerSection, { flex: 1 }]}>
          <GameModeSelection
            modes={GAME_MODE_CONFIGS}
            onModeSelect={navigateToGameMode}
          />
        </View>
      </SafeContent>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    padding: theme.spacing.md,
  },
  centerSection: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
