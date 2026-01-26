// Game Play Types
// Pawn and Player types are exported from state/index.ts

export interface BoardPosition {
  x: number;
  y: number;
}

export type TurnPhase = "roll" | "move" | "wait";

export interface GameState {
  players: import("../../store").Player[];
  currentPlayerIndex: number;
  diceValue: number | null;
  isRolling: boolean;
  winner: string | null;
  turnPhase: TurnPhase;
}
