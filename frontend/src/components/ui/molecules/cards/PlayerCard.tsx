import { View } from "react-native";
import { Text } from "../../atoms/Text";
import { StyleSheet } from "react-native-unistyles";

interface PlayerCardProps {
  name: string;
  color: string;
  isActive?: boolean;
  score?: number;
}

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

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.medium,
    borderRadius: theme.radius.md,
    borderWidth: 2,
    borderColor: "transparent",
    gap: theme.spacing.sm,
  },
  active: {
    borderWidth: 2,
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: theme.radius.full,
  },
}));
