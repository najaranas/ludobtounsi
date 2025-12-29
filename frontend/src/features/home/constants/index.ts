import { ImageSource } from "expo-image";
import { HomeAssets } from "../assets";

/**
 * GameMode - Available game modes in the app
 */
export const GameModes = {
  FRIENDS: "friends",
  AI: "ai",
} as const;

export type GameMode = (typeof GameModes)[keyof typeof GameModes];

/**
 * HomeActions - Quick action button identifiers
 */
export const HomeActions = {
  SETTINGS: "settings",
  CHAT: "chat",
} as const;

export type HomeAction = (typeof HomeActions)[keyof typeof HomeActions];

/**
 * GameModeConfig - Configuration for each game mode card
 */
export interface GameModeConfig {
  id: GameMode;
  title: string;
  subtitle?: string;
  iconSource: ImageSource;
  backgroundSource: ImageSource;
  route: string;
}

export const GAME_MODE_CONFIGS: GameModeConfig[] = [
  {
    id: GameModes.FRIENDS,
    title: "Friends",
    subtitle: "2-4 Players",
    iconSource: HomeAssets.icons.playFriends,
    backgroundSource: HomeAssets.backgrounds.blueSquare,
    route: "/(game-setup)/select-player-count",
  },
  {
    id: GameModes.AI,
    title: "L",
    subtitle: "vs Computer",
    iconSource: HomeAssets.icons.vsAi,
    backgroundSource: HomeAssets.backgrounds.greenSquare,
    route: "/(game-setup)/player-setup",
  },
];

/**
 * QuickActionConfig - Configuration for toolbar action buttons
 */
export interface QuickActionConfig {
  id: HomeAction;
  iconSource: ImageSource;
  backgroundSource: ImageSource;
  route?: string;
}

export const QUICK_ACTION_CONFIGS: QuickActionConfig[] = [
  {
    id: HomeActions.SETTINGS,
    iconSource: HomeAssets.icons.settings,
    backgroundSource: HomeAssets.backgrounds.brownSquare,
    route: "/settings",
  },
  {
    id: HomeActions.CHAT,
    iconSource: HomeAssets.icons.chat,
    backgroundSource: HomeAssets.backgrounds.brownSquare,
  },
];
