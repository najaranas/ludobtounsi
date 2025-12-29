import React from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

export interface SafeContentProps {
  children: React.ReactNode;
  safe?: boolean;
  edges?: ("top" | "bottom" | "left" | "right")[];
  style?: ViewStyle;
}

/**
 * SafeContent - Wrapper that applies safe area padding using insets
 *
 * @description Uses padding instead of SafeAreaView for more control.
 * Can selectively apply safe area to specific edges.
 */
export function SafeContent({
  children,
  safe = true,
  edges = ["top", "bottom", "left", "right"],
  style,
}: SafeContentProps) {
  const insets = useSafeAreaInsets();

  const safePadding: ViewStyle = safe
    ? {
        paddingTop: edges.includes("top") ? insets.top : 0,
        paddingBottom: edges.includes("bottom") ? insets.bottom : 0,
        paddingLeft: edges.includes("left") ? insets.left : 0,
        paddingRight: edges.includes("right") ? insets.right : 0,
      }
    : {};

  return <View style={[styles.container, safePadding, style]}>{children}</View>;
}

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },
}));
