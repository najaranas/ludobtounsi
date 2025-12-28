import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { colors, typography } from "../../../constants/theme";

interface AppTextProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: keyof typeof colors.text;
}

/**
 * Text - Base text component with theme support
 * Usage: <Text variant="h1">Title</Text>
 */
export function Text({
  variant = "body",
  color = "primary",
  style,
  ...props
}: AppTextProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        { color: colors.text[color] },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily.regular,
  },
  h1: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
  },
  h2: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.semibold,
  },
  h3: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
  },
  body: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
  },
  caption: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
  },
});
