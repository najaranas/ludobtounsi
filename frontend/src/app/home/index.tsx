import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ScreenContainer } from "@/components/ui/templates/ScreenContainer";
import { SafeContent } from "@/components/ui/atoms/SafeContent";
import { ActionIconButton, Button, GameModeCard, Text } from "@/components/ui";
import { HomeAssets } from "@/constants/assets";
import { useHomeNavigation } from "@/hooks/useHomeNavigation";
import { Image } from "expo-image";
import { scale } from "react-native-size-matters";
import { HapticService } from "@/services/haptic";
import { SoundService } from "@/services/sound";

export default function HomeScreen() {
  const { navigateToGameMode, handleQuickAction } = useHomeNavigation();

  return (
    <ScreenContainer backgroundSource={HomeAssets.backgrounds.main}>
      <SafeContent style={styles.content}>
        <View style={styles.actionsContainer}>
          <ActionIconButton
            iconSource={HomeAssets.icons.settings}
            backgroundSource={HomeAssets.backgrounds.brownSquare}
            onPress={() => handleQuickAction("SETTINGS")}
          />
          <ActionIconButton
            iconSource={HomeAssets.icons.chat}
            backgroundSource={HomeAssets.backgrounds.brownSquare}
            onPress={() => handleQuickAction("ABOUT")}
          />
        </View>

        <Image source={HomeAssets.logos.main} style={styles.logo} />

        <View style={styles.gameModeContainer}>
          <GameModeCard
            title="friends"
            description="2-4 Players"
            iconSource={HomeAssets.icons.playFriends}
            backgroundSource={HomeAssets.backgrounds.blueSquare}
            onPress={() => navigateToGameMode("FRIENDS")}
          />
          <GameModeCard
            title="ai"
            description="vs Computer"
            iconSource={HomeAssets.icons.vsAi}
            backgroundSource={HomeAssets.backgrounds.greenSquare}
            onPress={() => navigateToGameMode("AI")}
          />
        </View>
        <Button
          onPress={() => {
            HapticService.buttonPress();
            SoundService.play("ButtonClick");
          }}>
          <Text style={{ color: "white", backgroundColor: "red" }}>aze</Text>
        </Button>
      </SafeContent>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    padding: theme.spacing.md,
  },
  logo: {
    width: scale(200),
    aspectRatio: 1,
    alignSelf: "center",
  },
  actionsContainer: {
    gap: theme.spacing.md,
  },
  centerSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  gameModeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.lg,
    flex: 1,
  },
}));
