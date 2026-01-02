import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SafeContent } from "@/components/ui";
import { ContentCard } from "@/components/ui/organisms";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import PageTitle from "@/components/ui/molecules/PageTitle";
import { PlayerCountButton } from "@/features/game-setup/components";
import useNavigation from "@/hooks/useNavigation";

/**
 * PlayerSetupScreen - Player count selection
 *
 * @description Allows users to select the number of players (2, 3, or 4)
 * for the game session.
 */
export default function PlayerSetupScreen() {
  const handlePlayerCountSelect = (count: number) => {
    // TODO: Navigate to next setup step with player count
    console.log(`Selected ${count} players`);
  };

  const { navigate } = useNavigation();

  return (
    <SafeContent>
      <View style={styles.container}>
        <ContentCard>
          <PageTitle title="Select Players" />

          <View style={styles.buttonContainer}>
            <PlayerCountButton
              count={2}
              onPress={() => navigate("/(game-setup)/player-setup")}
            />
            <PlayerCountButton
              count={3}
              onPress={() => handlePlayerCountSelect(3)}
            />
            <PlayerCountButton
              count={4}
              onPress={() => handlePlayerCountSelect(4)}
            />
          </View>

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
  buttonContainer: {
    gap: theme.spacing.md,
    alignItems: "center",
  },
}));
