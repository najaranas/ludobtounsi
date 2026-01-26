import React from "react";
import Animated from "react-native-reanimated";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useTurnArrowAnimation } from "../hooks";

type ArrowDirection = "left" | "right";

interface TurnIndicatorArrowProps {
  direction: ArrowDirection;
}

export default function TurnIndicatorArrow({
  direction,
}: TurnIndicatorArrowProps) {
  const { animatedStyle } = useTurnArrowAnimation({ direction });

  const rotateStyle = direction === "right" && styles.rotatedArrow;

  return (
    <Animated.View style={animatedStyle}>
      <Image
        source={require("@/assets/images/icons/left-arrow.png")}
        style={[styles.arrowImage, rotateStyle]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    width: 40,
    height: 40,
  },
  rotatedArrow: {
    transform: [{ rotateY: "180deg" }],
  },
});
