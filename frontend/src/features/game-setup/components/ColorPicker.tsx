import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, radius, spacing } from "../../../constants/theme";

interface ColorPickerProps {
  selectedColor: string;
  availableColors: string[];
  onColorSelect: (color: string) => void;
}

/**
 * ColorPicker - Player color selection component
 * Displays available colors as selectable circles
 */
export function ColorPicker({
  selectedColor,
  availableColors,
  onColorSelect,
}: ColorPickerProps) {
  return (
    <View style={styles.container}>
      {availableColors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorOption,
            { backgroundColor: color },
            selectedColor === color && styles.selected,
          ]}
          onPress={() => onColorSelect(color)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.sm,
    flexWrap: "wrap",
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
  },
  selected: {
    borderWidth: 3,
    borderColor: colors.text.primary,
  },
});
