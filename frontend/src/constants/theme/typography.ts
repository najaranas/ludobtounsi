import { RFValue } from "react-native-responsive-fontsize";

// Typography scale with responsive font sizes
export const typography = {
  fontFamily: {
    regular: "Baloo2-Regular",
    medium: "Baloo2-Medium",
    semiBold: "Baloo2-SemiBold",
    bold: "Baloo2-Bold",
    extraBold: "Baloo2-ExtraBold",
  },

  fontSize: {
    xs: RFValue(10),
    sm: RFValue(12),
    md: RFValue(14),
    lg: RFValue(18),
    xl: RFValue(22),
    xxl: RFValue(28),
    xxxl: RFValue(40),
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extraBold: "800" as const,
  },
} as const;

export type Typography = typeof typography;
