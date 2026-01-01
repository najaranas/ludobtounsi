import { Stack } from "expo-router";
import useAppBootstrap from "@/hooks/useAppBootstrap";

export default function RootLayout() {
  const { appReady } = useAppBootstrap();

  if (!appReady) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
      <Stack.Screen
        name="settings/index"
        options={{
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="about/index"
        options={{
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
