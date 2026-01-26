import { SafeContent, ScreenContainer } from "@/components/ui";
import GameArena from "@/features/game-play/components/GameArena";
import { HomeAssets } from "@/features/home/assets";
import { StyleSheet, Text } from "react-native";

export default function ArenaScreen() {
  return (
    <ScreenContainer backgroundSource={HomeAssets.backgrounds.main} padding={0}>
      <SafeContent style={styles.container}>
        <Text style={styles.title}>GAME</Text>
        <GameArena />
      </SafeContent>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
