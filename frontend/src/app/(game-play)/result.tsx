import { StyleSheet, Text, View } from "react-native";

/**
 * ResultScreen - Game over screen
 * Winner announcement, stats, play again option
 */
export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Result</Text>
      {/* TODO: Add winner display and stats */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A2E",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
