import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { SafeContent } from "@/components/ui";
import { ContentCard } from "@/components/ui/organisms";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import PageTitle from "@/components/ui/molecules/PageTitle";
import { PlayerCountButton } from "@/features/game-setup/components";
import { usePlayerCountSelection } from "./hooks/useSelectPlayerCountScreen";

export default function SelectPlayerCountScreen() {
  const { handlePlayerCountSelect } = usePlayerCountSelection();

  return (
    <SafeContent>
      <View style={styles.container}>
        <ContentCard>
          <PageTitle title="Select Players" />

          <View style={styles.buttonContainer}>
            <PlayerCountButton
              count={2}
              onPress={() => handlePlayerCountSelect(2)}
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
    gap: theme.spacing.lg,
    alignItems: "center",
  },
}));
