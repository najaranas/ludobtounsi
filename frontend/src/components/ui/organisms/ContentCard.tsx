import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export interface ContentCardProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

/**
 * ContentCard - Reusable bordered container
 *
 * @description Organism component providing a consistent card layout
 * with border, background, and spacing. Used across settings, game setup,
 * and other screens for visual consistency.
 */
export function ContentCard({ children, style, ...rest }: ContentCardProps) {
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    borderRadius: theme.radius.md,
    borderColor: theme.colors.ui.border,
    borderWidth: 1,
    minWidth: "100%",
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.background.accent,
    gap: theme.spacing.md,
    alignItems: "center",
  },
}));
