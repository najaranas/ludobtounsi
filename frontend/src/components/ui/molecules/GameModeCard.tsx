import React from "react";
import { PressableProps, View } from "react-native";
import { ImageBackground, ImageSource } from "expo-image";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "../atoms/Text";
import { IconImage } from "../atoms/IconImage";
import { Button } from "../atoms";

export interface GameModeCardProps extends Omit<PressableProps, "children"> {
  title: string;
  iconSource: ImageSource;
  backgroundSource: ImageSource;
  description?: string;
}

/**
 * GameModeCard - Selectable card for game mode selection
 *
 * @description Molecule that displays a game mode option with icon, title,
 * and optional description. Used in the home screen for mode selection.

 */
export function GameModeCard({
  title,
  iconSource,
  backgroundSource,
  description,
  ...pressableProps
}: GameModeCardProps) {
  return (
    <Button style={styles.container} {...pressableProps}>
      <ImageBackground
        style={styles.background}
        source={backgroundSource}
        contentFit="fill">
        <View style={styles.content}>
          <IconImage source={iconSource} size="xl" style={styles.icon} />
          <Text variant="h3" color="primary" style={styles.title}>
            {title}
          </Text>
          {description && (
            <Text
              variant="caption"
              color="secondary"
              style={styles.description}>
              {description}
            </Text>
          )}
        </View>
      </ImageBackground>
    </Button>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    width: "45%",
    aspectRatio: 1,
  },
  background: {
    flex: 1,
    borderRadius: theme.radius.lg,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.sm,
  },
  icon: {
    marginBottom: theme.spacing.xs,
  },
  title: {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.lg,
  },
  description: {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily.medium,
    fontSize: theme.typography.fontSize.sm,
    opacity: 0.85,
  },
}));
