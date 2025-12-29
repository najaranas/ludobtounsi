import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ImageBackground, ImageSource } from "expo-image";

export interface ScreenContainerProps {
  backgroundSource: ImageSource;
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

/**
 * ScreenContainer - Full-screen container with image background
 *
 * @description Template component providing consistent screen structure
 * with background image support. Used as the root container for screens.
 *
 * @example
 * <ScreenContainer backgroundSource={require('@/assets/bg/main.png')}>
 *   <HeaderSection />
 *   <ContentSection />
 * </ScreenContainer>
 */
export function ScreenContainer({
  backgroundSource,
  children,
  style,
  padding,
}: ScreenContainerProps) {
  return (
    <ImageBackground
      source={backgroundSource}
      style={[styles.container, style]}
      contentFit="cover">
      <View style={[styles.content, padding !== undefined && { padding }]}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
}));
