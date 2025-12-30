import React from "react";
import { View, PressableProps } from "react-native";
import { ImageBackground, ImageSource } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { IconImage } from "../../atoms/IconImage";
import { Button } from "../../atoms";

export interface ActionIconButtonProps extends PressableProps {
  iconSource: ImageSource;
  backgroundSource: ImageSource;
}

export function ActionIconButton({
  iconSource,
  backgroundSource,
  ...pressableProps
}: ActionIconButtonProps) {
  return (
    <Button style={styles.container} {...pressableProps}>
      <ImageBackground
        style={styles.background}
        source={backgroundSource}
        contentFit="fill">
        <View style={styles.content}>
          <IconImage source={iconSource} style={styles.icon} />
        </View>
      </ImageBackground>
    </Button>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    width: theme.spacing.xxl,
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
    width: "100%",
  },
}));
