// Game Setup Types
// PlayerConfig type is exported from state/index.ts

export interface GameSetupState {
  playerCount: number;
  players: import("../../store").PlayerConfig[];
  isConfigured: boolean;
}
