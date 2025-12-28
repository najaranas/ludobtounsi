import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

/**
 * SplashScreen - Initial loading screen
 * Displays app logo and loading indicator while assets load
 */
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ludo Btounsi</Text>
      <ActivityIndicator size="large" color="#C8102E" />
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 24,
  },
});
