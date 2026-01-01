import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useSoundsSetup } from "./sound";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function useAppBootstrap() {
  const [fontsLoaded, fontError] = useFonts({
    "Baloo2-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
  });

  useSoundsSetup();

  useEffect(() => {
    // Hide splash screen once fonts are loaded
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return {
    appReady: fontsLoaded || !!fontError,
  };
}
