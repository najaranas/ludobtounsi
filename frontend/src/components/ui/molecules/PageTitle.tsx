import React from "react";
import { Text } from "../atoms";
import { StyleSheet } from "react-native-unistyles";

export default function PageTitle({ title }: { title: string }) {
  return (
    <Text variant="h1" style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create((theme) => ({
  title: {
    color: "#EEA12D",
    textAlign: "center",
  },
}));
