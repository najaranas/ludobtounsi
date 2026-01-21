import { useEffect, useState, useCallback } from "react";

import useNavigation from "@/hooks/useNavigation";
import type { pawnColor } from "@/types";
import { useGameSetupStore } from "../state/GameSetupSlice";

/**
 * usePlayerColorSelection - Custom Hook
 *
 * @description Manages player color selection state and navigation logic.
 * Automatically navigates to arena when all colors are selected.
 *
 * @layer Application (Business Logic Hook)
 */
export function usePlayerColorSelection() {
  const { navigate } = useNavigation();
  const { playerCount } = useGameSetupStore();

  const [selectedColors, setSelectedColors] = useState<pawnColor[]>([]);

  const handleColorSelect = useCallback(
    (color: pawnColor) => {
      setSelectedColors((prevColors) => {
        // Toggle color selection
        if (prevColors.includes(color)) {
          return prevColors.filter((c) => c !== color);
        }

        // Prevent selecting more than player count
        if (prevColors.length >= playerCount) {
          return prevColors;
        }

        return [...prevColors, color];
      });
    },
    [playerCount],
  );

  // Auto-navigate when all colors selected
  useEffect(() => {
    if (selectedColors.length === playerCount && selectedColors.length > 0) {
      // TODO: Create player configs with names
      navigate("/(game-play)/arena");
    }
  }, [selectedColors, playerCount, navigate]);

  return {
    handleColorSelect,
    selectedColors,
  };
}
