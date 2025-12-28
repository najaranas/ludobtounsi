// Sound effect identifiers
export enum SoundEffect {
  DICE_ROLL = "dice_roll",
  PAWN_MOVE = "pawn_move",
  PAWN_CAPTURE = "pawn_capture",
  PAWN_HOME = "pawn_home",
  WINNER = "winner",
  BUTTON_TAP = "button_tap",
  TURN_START = "turn_start",
}

// Sound file paths mapping
export const SOUND_FILES: Record<SoundEffect, string> = {
  [SoundEffect.DICE_ROLL]: "dice_roll.mp3",
  [SoundEffect.PAWN_MOVE]: "pawn_move.mp3",
  [SoundEffect.PAWN_CAPTURE]: "pawn_capture.mp3",
  [SoundEffect.PAWN_HOME]: "pawn_home.mp3",
  [SoundEffect.WINNER]: "winner.mp3",
  [SoundEffect.BUTTON_TAP]: "button_tap.mp3",
  [SoundEffect.TURN_START]: "turn_start.mp3",
};
