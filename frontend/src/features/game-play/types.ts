// Game Play Types
// Pawn and Player types are exported from state/index.ts

export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  players: import("../../store").Player[];
  currentPlayerIndex: number;
  diceValue: number | null;
  isRolling: boolean;
  winner: string | null;
  turnPhase: "roll" | "move" | "wait";
}
