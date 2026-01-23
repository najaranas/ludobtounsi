import { View } from "react-native";
import React from "react";
import Dice from "./Dice";

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
      <View
        style={{
          width: "100%",
          aspectRatio: 1,
          backgroundColor: "#333",
        }}></View>
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
