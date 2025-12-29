import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

/**
 * Responsive sizing utilities
 *
 * @description Centralized responsive sizing functions for consistent scaling.
 *
 * Usage:
 * - rs() / scale() - Horizontal scaling (width, horizontal padding/margin)
 * - rvs() / verticalScale() - Vertical scaling (height, vertical padding/margin)
 * - rms() / moderateScale() - Moderate scaling (balanced, good for most cases)
 * - rf() / RFValue() - Responsive font size
 * - rfp() / RFPercentage() - Font size as percentage of screen height
 */

// Re-export with shorter aliases
export const rs = scale;
export const rvs = verticalScale;
export const rms = moderateScale;
export const rmvs = moderateVerticalScale;
export const rf = RFValue;
export const rfp = RFPercentage;

// Also export original names
export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  RFValue,
  RFPercentage,
};

// Icon sizes (responsive)
export const iconSize = {
  xs: scale(16),
  sm: scale(24),
  md: scale(32),
  lg: scale(48),
  xl: scale(64),
  xxl: scale(80),
} as const;

// Button sizes (responsive)
export const buttonSize = {
  sm: scale(40),
  md: scale(48),
  lg: scale(56),
  xl: scale(64),
} as const;

// Image/logo sizes (responsive)
export const imageSize = {
  sm: scale(60),
  md: scale(100),
  lg: scale(150),
  xl: scale(200),
  xxl: scale(250),
} as const;
