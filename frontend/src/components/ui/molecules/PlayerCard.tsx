import { StyleSheet, View } from "react-native";
import { colors, radius, spacing } from "../../../constants/theme";
import { Text } from "../atoms/Text";

interface PlayerCardProps {
  name: string;
  color: string;
  isActive?: boolean;
  score?: number;
}

/**
 * PlayerCard - Displays player info during game
 * Shows name, color indicator, and current score
 */
export function PlayerCard({
  name,
  color,
  isActive = false,
  score = 0,
}: PlayerCardProps) {
  return (
    <View
      style={[
        styles.container,
        isActive && styles.active,
        { borderColor: color },
      ]}>
      <View style={[styles.colorIndicator, { backgroundColor: color }]} />
      <Text variant="body">{name}</Text>
      <Text variant="caption" color="secondary">
        {score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    backgroundColor: colors.background.medium,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: "transparent",
    gap: spacing.sm,
  },
  active: {
    borderWidth: 2,
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: radius.full,
  },
});
