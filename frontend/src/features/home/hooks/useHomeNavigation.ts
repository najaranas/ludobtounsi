import { useCallback } from "react";
import { useRouter } from "expo-router";
import {
  GameMode,
  HomeAction,
  HomeActions,
  GAME_MODE_CONFIGS,
} from "../constants";

export interface UseHomeNavigationReturn {
  navigateToGameMode: (mode: GameMode) => void;
  handleQuickAction: (action: HomeAction) => void;
}

/**
 * useHomeNavigation - Handles all navigation logic for home screen
 *
 * @description Centralizes navigation logic following Single Responsibility.
 * Separates navigation concerns from UI rendering.
 *
 * @example
 * const { navigateToGameMode, handleQuickAction } = useHomeNavigation();
 */
export function useHomeNavigation(): UseHomeNavigationReturn {
  const router = useRouter();

  const navigateToGameMode = useCallback(
    (mode: GameMode) => {
      const config = GAME_MODE_CONFIGS.find((c) => c.id === mode);
      if (config?.route) {
        router.push(config.route as any);
      }
    },
    [router]
  );

  const handleQuickAction = useCallback(
    (action: HomeAction) => {
      switch (action) {
        case HomeActions.SETTINGS:
          router.push("/settings");
          break;
        case HomeActions.CHAT:
          // TODO: Implement chat functionality
          console.log("Chat action pressed");
          break;
        default:
          console.warn(`Unknown action: ${action}`);
      }
    },
    [router]
  );

  return {
    navigateToGameMode,
    handleQuickAction,
  };
}
