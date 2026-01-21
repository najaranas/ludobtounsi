export type GameMode = "FRIENDS" | "AI";
export type AppLanguage = "en" | "ar" | "fr" | "tn";

// Game Types
export type pawnColor = "red" | "green" | "blue" | "yellow";
export type playersNumber = 2 | 3 | 4;

/**
 * PlayerConfig - Domain Entity
 *
 * @description Represents a player's configuration in the game.
 */
export interface PlayerConfig {
  id: string;
  name: string;
  color: pawnColor;
  isAI: boolean;
}
