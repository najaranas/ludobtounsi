import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ActionIconButton } from "@/components/ui/molecules/ActionIconButton";
import { QuickActionConfig, HomeAction } from "../constants";

export interface QuickActionsToolbarProps {
  actions: QuickActionConfig[];
  onActionPress: (action: HomeAction) => void;
}

export function QuickActionsToolbar({
  actions,
  onActionPress,
}: QuickActionsToolbarProps) {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <ActionIconButton
          key={action.id}
          iconSource={action.iconSource}
          backgroundSource={action.backgroundSource}
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
