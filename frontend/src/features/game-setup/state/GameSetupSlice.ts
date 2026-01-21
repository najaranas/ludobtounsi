import { create } from "zustand";

import type { PlayerConfig, playersNumber } from "@/types";

/**
 * GameSetupState - State Management
 *
 * @description Manages game setup configuration state.
 * Stores player count, player configurations, and setup completion status.
 *
 * @layer Application (State Management)
 */
interface GameSetupState {
  // State
  playerCount: playersNumber;
  players: PlayerConfig[];
  isConfigured: boolean;

  // Actions
  setPlayerCount: (count: playersNumber) => void;
  setPlayers: (players: PlayerConfig[]) => void;
  setConfigured: (configured: boolean) => void;
  resetGameSetup: () => void;
}

const INITIAL_STATE = {
  playerCount: 2 as playersNumber,
  players: [] as PlayerConfig[],
  isConfigured: false,
};

export const useGameSetupStore = create<GameSetupState>()((set) => ({
  ...INITIAL_STATE,

  setPlayerCount: (playerCount) => set({ playerCount }),
  setPlayers: (players) => set({ players }),
  setConfigured: (isConfigured) => set({ isConfigured }),
  resetGameSetup: () => set(INITIAL_STATE),
}));
