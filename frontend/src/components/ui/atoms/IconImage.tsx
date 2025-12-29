import React from "react";
import { ImageStyle } from "react-native";
import { Image, ImageSource, ImageContentFit, ImageProps } from "expo-image";
import { StyleSheet } from "react-native-unistyles";
import { scale } from "react-native-size-matters";

export interface IconImageProps extends ImageProps {
  source: ImageSource;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  contentFit?: ImageContentFit;
  style?: ImageStyle;
  tintColor?: string;
}

const SIZE_MAP = {
  xs: scale(16),
  sm: scale(24),
  md: scale(32),
  lg: scale(48),
  xl: scale(64),
} as const;

/**
 * IconImage - Displays an image icon with consistent sizing
 *
 * @description Simple atom for rendering icons from image sources.
 * Handles size normalization and maintains aspect ratio.
 *
 * @example
 * <IconImage source={require('@/assets/icons/play.png')} size="md" />
 */
export function IconImage({
  source,
  size = "md",
  style,
  ...props
}: IconImageProps) {
  const resolvedSize = typeof size === "number" ? size : SIZE_MAP[size];

  return (
    <Image
      source={source}
      style={[
        styles.icon,
        { width: resolvedSize, height: resolvedSize },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create(() => ({
  icon: {
    aspectRatio: 1,
  },
}));
