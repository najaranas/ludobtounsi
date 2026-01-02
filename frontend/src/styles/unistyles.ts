import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "@/constants/theme";
import { StyleSheet } from "react-native-unistyles";

const ludoTheme = {
  colors: COLORS,
  spacing: SPACING,
  radius: RADIUS,
  typography: TYPOGRAPHY,
} as const;

StyleSheet.configure({
  themes: { ludo: ludoTheme },
  settings: {
    initialTheme: "ludo",
  },
});

export type AppTheme = typeof ludoTheme;

declare module "react-native-unistyles" {
  export interface UnistylesThemes {
    ludo: AppTheme;
  }
}
