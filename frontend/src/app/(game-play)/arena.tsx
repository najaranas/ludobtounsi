import { StyleSheet, Text, View } from "react-native";

/**
 * ArenaScreen - Main game board
 * Ludo board, dice, pawns, turn indicator
 */
export default function ArenaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Arena</Text>
      {/* TODO: Add game board and controls */}
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
