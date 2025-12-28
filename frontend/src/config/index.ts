// App configuration
export const config = {
  // App info
  app: {
    name: "Ludo Btounsi",
    version: "1.0.0",
    bundleId: "com.ludobtounsi.app",
  },

  // Animation durations (ms)
  animation: {
    diceRoll: 800,
    pawnMove: 300,
    screenTransition: 250,
  },

  // Game defaults
  defaults: {
    playerCount: 2,
    aiDifficulty: "medium" as const,
  },

  // Storage keys
  storageKeys: {
    settings: "@ludo_btounsi_settings",
    gameState: "@ludo_btounsi_game_state",
    highScores: "@ludo_btounsi_high_scores",
  },
} as const;

export type Config = typeof config;
