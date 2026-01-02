import { StyleSheet, View, ViewProps } from "react-native";
import { COLORS } from "../../constants/theme";

interface DiceIconProps extends ViewProps {
  value?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: number;
  color?: string;
}

/**
 * DiceIcon - Dice icon placeholder
 * TODO: Replace with actual SVG implementation
 */
export function DiceIcon({
  value = 1,
  size = 48,
  color = COLORS.text.primary,
  style,
  ...props
}: DiceIconProps) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderColor: color },
        style,
      ]}
      {...props}>
      {/* TODO: Add dice face with react-native-svg */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
