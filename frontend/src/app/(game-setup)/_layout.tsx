import { Stack } from "expo-router";

/**
 * GameSetupLayout - Handles game configuration flow
 * Player count → Player setup → Start game
 */
export default function GameSetupLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="select-player-count" />
      <Stack.Screen name="player-setup" />
    </Stack>
  );
}
