import { View } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { useAppStartupNavigation } from "@/features/appStartup/hooks";
import { AppStartupAssets } from "@/features/appStartup/assets";

/**
 * LoadingScreen - Entry point of the app
 */
export default function LoadingScreen() {
  useAppStartupNavigation();

  return (
    <ImageBackground
      source={AppStartupAssets.background}
      style={styles.background}
      contentFit="cover">
      <View style={styles.container}>
        <Image
          source={AppStartupAssets.logo}
          style={styles.image}
          contentFit="contain"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create((theme) => ({
  background: {
    flex: 1,
  },
  image: {
    width: "70%",
    aspectRatio: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  button: {
    marginTop: theme.spacing.xl,
    backgroundColor: theme.colors.primary.red,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xxl,
    borderRadius: theme.radius.md,
  },
  buttonText: {
    color: theme.colors.primary.white,
    fontSize: 20,
    fontWeight: "bold",
  },
}));
