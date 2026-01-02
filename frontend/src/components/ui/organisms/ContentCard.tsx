import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export interface ContentCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * ContentCard - Reusable bordered container
 *
 * @description Organism component providing a consistent card layout
 * with border, background, and spacing. Used across settings, game setup,
 * and other screens for visual consistency.
 *
 * @example
 * <ContentCard>
 *   <PageTitle title="Settings" />
 *   <SettingsList />
 * </ContentCard>
 */
export function ContentCard({ children, style }: ContentCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create((theme) => ({
  card: {
    borderRadius: theme.radius.md,
    borderColor: theme.colors.ui.border,
    borderWidth: 1,
    minWidth: "100%",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.accent,
    gap: theme.spacing.md,
    alignItems: "center",
  },
}));
