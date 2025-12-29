import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SettingsAction, SettingsActionConfig } from "../constants";
import SettingButton from "./SettingButton";

export interface QuickActionsToolbarProps {
  actions: SettingsActionConfig[];
  onActionPress: (action: SettingsAction) => void;
}

/** 

 */
export function SettingsActions({
  actions,
  onActionPress,
}: QuickActionsToolbarProps) {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <SettingButton
          key={action.id}
          label={action.label}
          accessibilityLabel={action.accessibilityLabel}
          onPress={() => onActionPress(action.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.spacing.md,
  },
}));
