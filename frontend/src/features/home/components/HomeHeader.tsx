import React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { scale } from "react-native-size-matters";

import { HomeAssets } from "../assets";

/**
 * HomeLogo - Displays the main app logo
 */
export function HomeLogo() {
  return (
    <Image
      source={HomeAssets.logos.main}
      style={styles.logo}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create(() => ({
  logo: {
    width: scale(200),
    aspectRatio: 1,
  },
}));
