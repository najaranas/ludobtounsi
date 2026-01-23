import { View } from "react-native";
import React from "react";
import Dice from "./Dice";
import Board from "./Board";

export default function GameBoard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        gap: 20,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}>
        <Dice />
        <Dice />
      </View>
      <Board />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}>
        <Dice />
        <Dice />
      </View>
    </View>
  );
}
