// Tunisia-inspired color palette
export const COLORS = {
  // Primary colors (Tunisia flag)
  primary: {
    red: "#C8102E",
    white: "#FFFFFF",
  },

  // Background colors
  background: {
    main: "#1A1A2E", // Ludo dark background
    medium: "#16213E",
    accent: "#0F3460",
  },

  // Player colors
  player: {
    red: "#72181A",
    blue: "#34659A",
    green: "#516A2B",
    yellow: "#BFA04E",
  },

  // UI colors
  ui: {
    success: "#06D6A0",
    warning: "#FFD166",
    error: "#EF476F",
    disabled: "#6C757D",
    border: "#EEA12D",
    overlay: "rgba(0, 0, 0, 0.8)",
  },

  // Text colors
  text: {
    primary: "#FFFFFF",
    secondary: "#B8B8B8",
    muted: "#6C757D",
  },
} as const;

export type Colors = typeof COLORS;
