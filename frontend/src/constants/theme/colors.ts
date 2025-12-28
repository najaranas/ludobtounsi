// Tunisia-inspired color palette
export const colors = {
  // Primary colors (Tunisia flag)
  primary: {
    red: "#C8102E",
    white: "#FFFFFF",
  },

  // Background colors
  background: {
    dark: "#1A1A2E",
    medium: "#16213E",
    light: "#0F3460",
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
  },

  // Text colors
  text: {
    primary: "#FFFFFF",
    secondary: "#B8B8B8",
    muted: "#6C757D",
  },
} as const;

export type Colors = typeof colors;
