import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import React from "react";
import Dice from "./Dice";
import LudoBoard from "./LudoBoard";

export default function GameArena() {
  return (
    <View style={styles.container}>
      <View style={styles.diceRow}>
        <Dice diceValue={2} playerColor="red" />
        <Dice diceValue={3} playerColor="green" />
      </View>

      <LudoBoard />

      <View style={styles.diceRow}>
        <Dice diceValue={2} playerColor="blue" />
        <Dice diceValue={3} playerColor="yellow" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: theme.spacing.lg,
  },
  diceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.lg,
  },
}));
