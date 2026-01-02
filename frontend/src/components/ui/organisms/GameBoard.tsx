import { StyleSheet, View } from "react-native";
import { COLORS, SPACING } from "../../../constants/theme";
import { Text } from "../atoms/Text";

/**
 * GameBoard - Main Ludo board organism
 * Contains the complete game board layout
 */
export function GameBoard() {
  return (
    <View style={styles.container}>
      <Text variant="caption" color="muted">
        {/* TODO: Implement game board */}
        Game Board Placeholder
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    backgroundColor: COLORS.background.medium,
    padding: SPACING.md,
    justifyContent: "center",
    alignItems: "center",
  },
});
