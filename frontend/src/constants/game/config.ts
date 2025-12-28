// Game configuration constants
export const GAME_CONFIG = {
  // Board configuration
  BOARD_SIZE: 15,
  SAFE_POSITIONS: [0, 8, 13, 21, 26, 34, 39, 47] as number[],
  HOME_STRETCH_LENGTH: 6,

  // Pawns per player
  PAWNS_PER_PLAYER: 4,

  // Dice
  DICE_MIN: 1,
  DICE_MAX: 6,
  ROLL_TO_EXIT: 6,

  // Players
  MIN_PLAYERS: 2,
  MAX_PLAYERS: 4,
};

export type GameConfig = typeof GAME_CONFIG;
