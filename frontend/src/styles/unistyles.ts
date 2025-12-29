import { StyleSheet } from "react-native-unistyles";
import { colors } from "../constants/theme/colors";
import { spacing } from "../constants/theme/spacing";
import { radius } from "../constants/theme/radius";
import { typography } from "../constants/theme/typography";

// Ludo dark theme (single theme)
const ludoTheme = {
  colors,
  spacing,
  radius,
  typography,
} as const;

// Configure Unistyles with only one theme
StyleSheet.configure({
  themes: { ludo: ludoTheme },
  settings: {
    initialTheme: "ludo",
  },
});

// Export type for TypeScript support
export type AppTheme = typeof ludoTheme;

// Declare module for TypeScript
declare module "react-native-unistyles" {
  export interface UnistylesThemes {
    ludo: AppTheme;
  }
}
