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
    fontFamily: typography.fontFamily.medium,
  },
  h1: {
    fontSize: typography.fontSize.xxxl,
    fontFamily: typography.fontFamily.extraBold,
  },
  h2: {
    fontSize: typography.fontSize.xxl,
    fontFamily: typography.fontFamily.semiBold,
  },
  h3: {
    fontSize: typography.fontSize.xl,
    fontFamily: typography.fontFamily.medium,
  },
  body: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.regular,
  },
  caption: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.regular,
  },
});
