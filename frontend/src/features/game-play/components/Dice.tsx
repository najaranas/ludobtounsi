import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { DICE_ASSETS } from "@/constants/assets";
import { DiceValue } from "@/constants/assets/game";

interface DiceProps {
  diceValue?: DiceValue;
}

export default function Dice({ diceValue }: DiceProps) {
  return (
    <View>
      <Image
        source={DICE_ASSETS[diceValue ?? 1]}
        style={{ width: 60, aspectRatio: 1 }}
      />
    </View>
  );
}
