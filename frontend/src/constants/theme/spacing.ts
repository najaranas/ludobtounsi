import { scale, moderateScale } from "react-native-size-matters";

// Spacing scale with responsive sizing
export const spacing = {
  xxs: scale(2),
  xs: scale(4),
  sm: scale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(48),
  xxxl: moderateScale(64),
} as const;

export type Spacing = typeof spacing;
