import useNavigation from "@/hooks/useNavigation";
import { GameMode } from "@/types";
import { HomeAction } from "../types";

export interface UseHomeNavigationReturn {
  navigateToGameMode: (mode: GameMode) => void;
  handleQuickAction: (action: HomeAction) => void;
}

export function useHomeNavigation(): UseHomeNavigationReturn {
  const { navigate } = useNavigation();

  const navigateToGameMode = (mode: GameMode) => {
    switch (mode) {
      case "FRIENDS":
        navigate("/(game-play)/arena");
        break;
      case "AI":
        navigate("/(game-play)/arena");
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
      case "CHAT":
        // TODO: Implement chat functionality
        console.log("Chat action pressed");
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
