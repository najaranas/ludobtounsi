import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../../constants/theme";

interface AppTextProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: keyof typeof COLORS.text;
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
        { color: COLORS.text[color] },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
  },
  h1: {
    fontSize: TYPOGRAPHY.fontSize.xxxl,
    fontFamily: TYPOGRAPHY.fontFamily.extraBold,
  },
  h2: {
    fontSize: TYPOGRAPHY.fontSize.xxl,
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
  },
  h3: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontFamily: TYPOGRAPHY.fontFamily.medium,
  },
  body: {
    fontSize: TYPOGRAPHY.fontSize.md,
    fontFamily: TYPOGRAPHY.fontFamily.regular,
  },
  caption: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontFamily: TYPOGRAPHY.fontFamily.regular,
  },
});
