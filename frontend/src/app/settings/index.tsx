import { StyleSheet, Text, View } from "react-native";

/**
 * SettingsScreen - App configuration
 * Sound, Language, Theme preferences
 */
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {/* TODO: Add settings options */}
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
