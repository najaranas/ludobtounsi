import { SafeContent, ScreenContainer } from "@/components/ui";
import GameBoard from "@/features/game-play/components/GameBoard";
import { HomeAssets } from "@/features/home/assets";
import { StyleSheet, Text } from "react-native";

export default function ArenaScreen() {
  return (
    <ScreenContainer backgroundSource={HomeAssets.backgrounds.main} padding={0}>
      <SafeContent style={styles.container}>
        <Text style={styles.title}>GAME</Text>
        <GameBoard />
      </SafeContent>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
