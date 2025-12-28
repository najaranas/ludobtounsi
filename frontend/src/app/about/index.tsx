import { StyleSheet, Text, View } from "react-native";

/**
 * AboutScreen - App information
 * Credits, Version, Tunisia theme story
 */
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      {/* TODO: Add app info and credits */}
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
