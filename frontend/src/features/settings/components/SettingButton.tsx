import { Switch, View } from "react-native";
import React from "react";
import { Text } from "@/components/ui";
import { StyleSheet } from "react-native-unistyles";

interface SettingButtonProps {
  label: string;
  value: boolean;
  onToggle: () => void;
}

export default function SettingButton({
  label,
  value,
  onToggle,
}: SettingButtonProps) {
  return (
    <View style={styles.container}>
      <Text variant="h3" style={styles.text}>
        {label}
      </Text>
      <Switch
        thumbColor="#FFF7ED"
        trackColor={{
          false: "#A8A29E",
          true: "#EEA12D",
        }}
        onChange={onToggle}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.md,
  },
  text: {
    color: theme.colors.text.primary,
  },
}));
