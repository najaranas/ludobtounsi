import { scale } from "react-native-size-matters";

// Border radius scale with responsive sizing
export const RADIUS = {
  none: 0,
  sm: scale(4),
  md: scale(8),
  lg: scale(12),
  xl: scale(16),
  xxl: scale(24),
  full: 9999,
} as const;

export type Radius = typeof RADIUS;
