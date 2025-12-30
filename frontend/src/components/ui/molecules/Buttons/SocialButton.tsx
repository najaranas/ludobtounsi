import { Linking } from "react-native";
import React from "react";
import { Button } from "../../atoms";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native-unistyles";

export default function SocialButton({
  icon,
  url,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
}) {
  return (
    <Button onPress={() => Linking.openURL(url)} style={styles.socialBtn}>
      <Ionicons name={icon} size={18} color="#EEA12D" />
    </Button>
  );
}
const styles = StyleSheet.create((theme) => ({
  socialBtn: {
    width: theme.spacing.xl,
    height: theme.spacing.xl,
    borderRadius: theme.spacing.xl / 2,
    borderWidth: 1,
    borderColor: "#EEA12D",
    alignItems: "center",
    justifyContent: "center",
  },
}));
