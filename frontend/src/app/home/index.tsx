import { StyleSheet, Text, View } from "react-native";

/**
 * HomeScreen - Main menu of the app
 * Navigation hub: Play, Settings, About
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {/* TODO: Add navigation buttons */}
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
