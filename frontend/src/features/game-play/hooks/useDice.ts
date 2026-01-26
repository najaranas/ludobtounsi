import { DiceValue } from "@/constants/assets/game";
import { PawnColor } from "@/types";

interface UseDiceStateProps {
  diceValue: DiceValue | null;
  playerColor: PawnColor;
}

export default function useDiceState({
  diceValue,
  playerColor,
}: UseDiceStateProps) {
  const isCurrentTurn = true; // TODO: Replace with actual turn logic
  const isLeftPosition = playerColor === "red" || playerColor === "blue";

  return { isCurrentTurn, isLeftPosition };
}
