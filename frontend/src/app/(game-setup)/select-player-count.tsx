import { StyleSheet, Text, View } from "react-native";

/**
 * SelectPlayerCountScreen - Choose number of players
 * Options: 2, 3, or 4 players
 */
export default function SelectPlayerCountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Players</Text>
      {/* TODO: Add player count selection */}
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
