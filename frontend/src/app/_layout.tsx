import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home/index" />
      <Stack.Screen name="(game-setup)" />
      <Stack.Screen name="(game-play)" />
      <Stack.Screen name="settings/index" />
      <Stack.Screen name="about/index" />
    </Stack>
  );
}
