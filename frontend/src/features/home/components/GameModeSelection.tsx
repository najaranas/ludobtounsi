import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import type { AppTheme } from "@/styles/unistyles";

import { GameModeCard } from "@/components/ui/molecules/GameModeCard";
import { GameModeConfig, GameMode } from "../constants";

export interface GameModeSelectionProps {
  modes: GameModeConfig[];
  onModeSelect: (mode: GameMode) => void;
}

/**
 * GameModeSelection - Grid of game mode cards
 *
 * @description Organism that renders available game modes as selectable cards.
 * Follows Open/Closed principle - new modes can be added without modifying this component.
 */
export function GameModeSelection({
  modes,
  onModeSelect,
}: GameModeSelectionProps) {
  return (
    <View style={styles.container}>
      {modes.map((mode) => (
        <GameModeCard
          key={mode.id}
          title={mode.title}
          description={mode.subtitle}
          iconSource={mode.iconSource}
          backgroundSource={mode.backgroundSource}
          onPress={() => onModeSelect(mode.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme: AppTheme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.lg,
  },
}));
