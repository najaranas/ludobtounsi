import type { ImageSource } from "expo-image";
import type { pawnColor } from "@/types";

interface PawnColorAsset {
  color: pawnColor;
  asset: ImageSource;
}

export const PAWN_COLOR_ASSETS: readonly PawnColorAsset[] = [
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
