import { create } from "zustand";

// ============================================
// GAME SETUP STORE
// ============================================
export interface PlayerConfig {
  id: string;
  name: string;
  color: string;
  isAI: boolean;
}

interface GameSetupState {
  playerCount: number;
  players: PlayerConfig[];
  isConfigured: boolean;
  // Actions
  setPlayerCount: (count: number) => void;
  setPlayers: (players: PlayerConfig[]) => void;
  setConfigured: (configured: boolean) => void;
  resetSetup: () => void;
}

const initialGameSetupState = {
  playerCount: 2,
  players: [] as PlayerConfig[],
  isConfigured: false,
};

export const useGameSetupStore = create<GameSetupState>()((set) => ({
  ...initialGameSetupState,
  // Actions
  setPlayerCount: (playerCount) => set({ playerCount }),
  setPlayers: (players) => set({ players }),
  setConfigured: (isConfigured) => set({ isConfigured }),
  resetSetup: () => set(initialGameSetupState),
}));

// ============================================
// GAME PLAY STORE
// ============================================
export interface Pawn {
  id: string;
  playerId: string;
  position: number;
  isHome: boolean;
  isFinished: boolean;
}

export interface Player {
  id: string;
  name: string;
  color: string;
  pawns: Pawn[];
  finishedPawns: number;
}

interface GamePlayState {
  players: Player[];
  currentPlayerIndex: number;
  diceValue: number | null;
  isRolling: boolean;
  winner: string | null;
  turnPhase: "roll" | "move" | "wait";
  // Actions
  startGame: (players: Player[]) => void;
  setDiceValue: (value: number) => void;
  setRolling: (rolling: boolean) => void;
  nextTurn: () => void;
  setWinner: (winnerId: string) => void;
  resetGame: () => void;
}

const initialGamePlayState = {
  players: [] as Player[],
  currentPlayerIndex: 0,
  diceValue: null,
  isRolling: false,
  winner: null,
  turnPhase: "roll" as const,
};

export const useGamePlayStore = create<GamePlayState>()((set) => ({
  ...initialGamePlayState,
  // Actions
  startGame: (players) =>
    set({
      players,
      currentPlayerIndex: 0,
      turnPhase: "roll",
      winner: null,
      diceValue: null,
    }),
  setDiceValue: (diceValue) =>
    set({
      diceValue,
      isRolling: false,
      turnPhase: "move",
    }),
  setRolling: (isRolling) => set({ isRolling }),
  nextTurn: () =>
    set((state) => ({
      currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length,
      diceValue: null,
      turnPhase: "roll",
    })),
  setWinner: (winner) => set({ winner }),
  resetGame: () => set(initialGamePlayState),
}));
