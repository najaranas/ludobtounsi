import { StyleSheet, Text, View } from "react-native";

/**
 * GameMenuScreen - Pause menu overlay
 * Resume, Restart, Settings, Quit options
 */
export default function GameMenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Menu</Text>
      {/* TODO: Add pause menu options */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 46, 0.95)",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
