import { GAME_CONFIG } from "../../../constants/game";

/**
 * GameEngine - Core game logic
 * Handles dice rolling, move validation, captures
 */
export class GameEngine {
  /**
   * Roll the dice (1-6)
   */
  static rollDice(): number {
    return (
      Math.floor(Math.random() * GAME_CONFIG.DICE_MAX) + GAME_CONFIG.DICE_MIN
    );
  }

  /**
   * Check if a position is safe (cannot be captured)
   */
  static isSafePosition(position: number): boolean {
    return GAME_CONFIG.SAFE_POSITIONS.includes(position);
  }

  /**
   * Calculate new position after move
   */
  static calculateNewPosition(
    currentPosition: number,
    diceValue: number,
    playerStartPosition: number
  ): number {
    // TODO: Implement full position calculation logic
    return currentPosition + diceValue;
  }

  /**
   * Check if pawn can exit home (requires 6)
   */
  static canExitHome(diceValue: number): boolean {
    return diceValue === GAME_CONFIG.ROLL_TO_EXIT;
  }

  /**
   * Check if move is valid
   */
  static isValidMove(
    currentPosition: number,
    diceValue: number,
    isInHome: boolean
  ): boolean {
    if (isInHome) {
      return this.canExitHome(diceValue);
    }
    return true; // TODO: Add more validation
  }
}
