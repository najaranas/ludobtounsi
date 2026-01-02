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
    red: "#E63946",
    blue: "#457B9D",
    green: "#2A9D8F",
    yellow: "#E9C46A",
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
