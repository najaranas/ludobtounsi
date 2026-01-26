import { View, StyleSheet } from "react-native";
import React from "react";

export default function Board() {
  return <View style={styles.board} />;
}

const styles = StyleSheet.create({
  board: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
  },
});
