import type { ImageSource } from "expo-image";
import type { pawnColor } from "@/types";

interface PawnColorAsset {
  color: pawnColor;
  asset: ImageSource;
}

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

export const PAWN_ASSETS: readonly PawnColorAsset[] = [
  {
    color: "red",
    asset: require("@/assets/images/icons/pawns/pawn-red.png"),
  },
  {
    color: "green",
    asset: require("@/assets/images/icons/pawns/pawn-green.png"),
  },
  {
    color: "blue",
    asset: require("@/assets/images/icons/pawns/pawn-blue.png"),
  },
  {
    color: "yellow",
    asset: require("@/assets/images/icons/pawns/pawn-yellow.png"),
  },
] as const;

export const DICE_ASSETS: Record<DiceValue, ImageSource> = {
  1: require("@/assets/images/icons/dices/dice-number-1.png"),
  2: require("@/assets/images/icons/dices/dice-number-2.png"),
  3: require("@/assets/images/icons/dices/dice-number-3.png"),
  4: require("@/assets/images/icons/dices/dice-number-4.png"),
  5: require("@/assets/images/icons/dices/dice-number-5.png"),
  6: require("@/assets/images/icons/dices/dice-number-6.png"),
} as const;

export const GameAssets = {
  pawns: PAWN_ASSETS,
  dice: DICE_ASSETS,
} as const;
