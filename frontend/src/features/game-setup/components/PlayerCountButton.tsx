import React from "react";
import { View } from "react-native";
import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { moderateScale } from "react-native-size-matters";

import { Button, Text } from "@/components/ui";
import type { playersNumber } from "@/types";

export interface PlayerCountButtonProps {
  count: playersNumber;
  onPress?: () => void;
  isSelected?: boolean;
}

/**
 * PlayerCountButton - Atom Component
 *
 * @description Presentational button for selecting the number of players.
 * Uses theme-based colors and responsive sizing.
 *
 * @layer Presentation (UI - Atom)
 *
 * @example
 * <PlayerCountButton count={4} onPress={handleSelect} />
 */
export function PlayerCountButton({
  count,
  onPress,
  isSelected = false,
}: PlayerCountButtonProps) {
  return (
    <Button onPress={onPress}>
      <ImageBackground
        style={styles.background}
        imageStyle={{ resizeMode: "stretch" }}
        source={require("@/assets/images/backgrounds/yellow-rectangle.png")}
        contentFit="fill">
        <View style={styles.content}>
          <Text variant="h2" style={styles.text}>
            {count} Players
          </Text>
        </View>
      </ImageBackground>
    </Button>
  );
}

const styles = StyleSheet.create((theme) => ({
  background: {
    width: moderateScale(220),
    height: moderateScale(90),
  },
  content: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.background.main,
  },
}));
