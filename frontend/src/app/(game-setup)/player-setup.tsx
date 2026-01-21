import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { ContentCard, SafeContent } from "@/components/ui";
import PageTitle from "@/components/ui/molecules/PageTitle";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import { PlayerColorPicker } from "@/features/game-setup";

/**
 * PlayerSetupScreen - Page/Screen
 *
 * @description Allows users to select colors for each player.
 * Second step in game setup flow.
 *
 * @layer Presentation (Screen)
 */
export default function PlayerSetupScreen() {
  return (
    <SafeContent>
      <View style={styles.container}>
        <ContentCard>
          <PageTitle title="Select Player Colors" />
          <PlayerColorPicker />
          <BackButton />
        </ContentCard>
      </View>
    </SafeContent>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
}));
