import { Stack } from "expo-router";

/**
 * GamePlayLayout - Active game screens
 * Arena (main game) → Menu (pause) → Result (end)
 */
export default function GamePlayLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="arena" />
      <Stack.Screen name="menu" options={{ presentation: "modal" }} />
      <Stack.Screen name="result" />
    </Stack>
  );
}
