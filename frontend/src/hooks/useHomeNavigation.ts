import useNavigation from "@/hooks/useNavigation";
import { GameMode } from "@/types";

export type HomeAction = "SETTINGS" | "ABOUT";

export interface UseHomeNavigationReturn {
  navigateToGameMode: (mode: GameMode) => void;
  handleQuickAction: (action: HomeAction) => void;
}

export function useHomeNavigation(): UseHomeNavigationReturn {
  const { navigate } = useNavigation();

  const navigateToGameMode = (mode: GameMode) => {
    switch (mode) {
      case "FRIENDS":
        navigate("/(game-setup)/player-setup");
        break;
      case "AI":
        navigate("/(game-setup)/player-setup");
        break;
      default:
        console.warn(`Unknown game mode: ${mode}`);
    }
  };

  const handleQuickAction = (action: HomeAction) => {
    switch (action) {
      case "SETTINGS":
        navigate("/settings");
        break;
      case "ABOUT":
        navigate("/about");
        break;
      default:
        console.warn(`Unknown action: ${action}`);
    }
  };

  return {
    navigateToGameMode,
    handleQuickAction,
  };
}
