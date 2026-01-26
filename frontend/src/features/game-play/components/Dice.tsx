import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { moderateScale } from "react-native-size-matters";
import React from "react";
import { Image } from "expo-image";
import { DICE_ASSETS } from "@/constants/assets";
import { DiceValue } from "@/constants/assets/game";
import { useDiceState } from "../hooks";
import { PawnColor } from "@/types";
import TurnIndicatorArrow from "./TurnIndicatorArrow";

interface DiceProps {
  diceValue: DiceValue | null;
  playerColor: PawnColor;
}

export default function Dice({ diceValue, playerColor }: DiceProps) {
  const { isCurrentTurn, isLeftPosition } = useDiceState({
    diceValue,
    playerColor,
  });

  const arrowDirection = isLeftPosition ? "left" : "right";

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isLeftPosition ? "row" : "row-reverse" },
      ]}>
      <Image source={DICE_ASSETS[diceValue ?? 1]} style={styles.diceImage} />
      {isCurrentTurn && <TurnIndicatorArrow direction={arrowDirection} />}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.xs,
  },
  diceImage: {
    width: moderateScale(50),
    aspectRatio: 1,
  },
}));
