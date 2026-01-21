import { View } from "react-native";
import { Image } from "expo-image";
import { moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native-unistyles";

import { Button } from "@/components/ui";
import { PAWN_COLOR_ASSETS } from "../assets";
import { usePlayerColorSelection } from "../hooks/useColorPicker";

/**
 * PlayerColorPicker - Organism Component
 *
 * @description Allows users to select player colors from available pawns.
 * Maximum selections are limited by player count.
 *
 * @layer Presentation (UI - Organism)
 */
export function PlayerColorPicker() {
  const { handleColorSelect, selectedColors } = usePlayerColorSelection();

  return (
    <View style={styles.container}>
      {PAWN_COLOR_ASSETS.map((pawn) => {
        const isSelected = selectedColors.includes(pawn.color);

        return (
          <Button
            key={pawn.color}
            style={[
              styles.colorButton,
              isSelected && styles.colorButtonSelected,
            ]}
            onPress={() => handleColorSelect(pawn.color)}>
            <Image
              source={pawn.asset}
              style={styles.pawnImage}
              contentFit="contain"
            />
          </Button>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.spacing.md,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorButton: {
    borderWidth: moderateScale(3),
    borderColor: "transparent",
    borderRadius: theme.radius.full,
    width: moderateScale(82),
    height: moderateScale(82),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.colors.background.medium,
  },
  colorButtonSelected: {
    borderColor: theme.colors.ui.border,
    backgroundColor: theme.colors.background.accent,
  },
  pawnImage: {
    aspectRatio: 512 / 689,
    height: moderateScale(64),
  },
}));
