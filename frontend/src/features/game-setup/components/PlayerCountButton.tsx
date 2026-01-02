import React from "react";
import { View } from "react-native";
import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { moderateScale } from "react-native-size-matters";

import { Button, Text } from "@/components/ui";

export interface PlayerCountButtonProps {
  count: 2 | 3 | 4;
  onPress?: () => void;
}

/**
 * PlayerCountButton - Button to select player count
 *
 * @description Presentational component for selecting the number of players
 * in a game. Uses themed colors and responsive sizing.
 *
 * @example
 * <PlayerCountButton count={4} onPress={handlePlayerCountSelect} />
 */
export function PlayerCountButton({ count, onPress }: PlayerCountButtonProps) {
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
    width: moderateScale(212),
    aspectRatio: 212 / 94,
  },
  content: {
    padding: theme.spacing.sm,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.background.main,
  },
}));
