import { StyleSheet, Text, View } from "react-native";

/**
 * PlayerSetupScreen - Configure each player
 * Name, Color, AI/Human selection
 */
export default function PlayerSetupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player Setup</Text>
      {/* TODO: Add player configuration form */}
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
