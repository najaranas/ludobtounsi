// Global type definitions

// Player color type
export type PlayerColor = "red" | "blue" | "green" | "yellow";

// Navigation params
export type RootStackParamList = {
  index: undefined;
  home: undefined;
  "(game-setup)": undefined;
  "(game-play)": undefined;
  settings: undefined;
  about: undefined;
};

// Re-export store types
export type { Pawn, Player, PlayerConfig } from "../store";

// Re-export feature types
export type { GameState, Position } from "../features/game-play/types";
export type { GameSetupState } from "../features/game-setup/types";
