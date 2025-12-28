import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors, radius, spacing } from "../../../constants/theme";
import { Text } from "./Text";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

/**
 * Button - Pressable button with variants
 * Usage: <Button title="Play" variant="primary" onPress={handlePress} />
 */
export function Button({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <ActivityIndicator color={colors.text.primary} />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },

  // Variants
  primary: {
    backgroundColor: colors.primary.red,
  },
  secondary: {
    backgroundColor: colors.background.light,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary.red,
  },

  // Sizes
  sm: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  md: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  lg: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },

  // States
  disabled: {
    opacity: 0.5,
  },

  // Text styles
  text: {
    color: colors.text.primary,
    fontWeight: "600",
  },
  primaryText: {
    color: colors.text.primary,
  },
  secondaryText: {
    color: colors.text.primary,
  },
  outlineText: {
    color: colors.primary.red,
  },
});
