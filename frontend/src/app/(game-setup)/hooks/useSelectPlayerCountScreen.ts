import { useCallback } from "react";

import { useGameSetupStore } from "@/features/game-setup/state/GameSetupSlice";
import useNavigation from "@/hooks/useNavigation";
import type { PlayersCount } from "@/types";

/**
 * usePlayerCountSelection - Screen Hook
 *
 * @description Handles player count selection and navigation logic.
 *
 * @layer Application (Screen Business Logic)
 */
export function usePlayerCountSelection() {
  const { navigate } = useNavigation();
  const { setPlayerCount } = useGameSetupStore();

  const handlePlayerCountSelect = useCallback(
    (count: PlayersCount) => {
      setPlayerCount(count);
      navigate("/(game-setup)/player-setup");
    },
    [setPlayerCount, navigate],
  );

  return {
    handlePlayerCountSelect,
  };
}

export default usePlayerCountSelection;
