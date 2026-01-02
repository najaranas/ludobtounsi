import { Text, View } from "react-native";
import React from "react";
import { ContentCard, SafeContent } from "@/components/ui";
import PageTitle from "@/components/ui/molecules/PageTitle";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import { StyleSheet } from "react-native-unistyles";

export default function PlayerSetupScreen() {
  return (
    <SafeContent>
      <View style={styles.container}>
        <ContentCard>
          <PageTitle title="Select Color And Name" />
          <Text>Player Setup Screen</Text>
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
