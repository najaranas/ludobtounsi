import React from "react";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "../atoms";

/**
 * PageTitle - Molecule Component
 *
 * @description Displays a styled page title using theme colors.
 *
 * @layer Presentation (UI - Molecule)
 */
export default function PageTitle({ title }: { title: string }) {
  return (
    <Text variant="h1" style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create((theme) => ({
  title: {
    color: theme.colors.ui.border,
    textAlign: "center",
  },
}));
