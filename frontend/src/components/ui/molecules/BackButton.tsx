import React from "react";
import { Button } from "../atoms";
import { Image } from "expo-image";
import useNavigation from "@/hooks/useNavigation";
import { StyleSheet } from "react-native-unistyles";

export default function BackButton() {
  const { goBack } = useNavigation();
  const handleBack = () => {
    goBack();
  };
  return (
    <Button onPress={handleBack}>
      <Image
        source={require("@/assets/images/icons/left-arrow.png")}
        style={styles.backIcon}
        contentFit="contain"
      />
    </Button>
  );
}

const styles = StyleSheet.create((theme) => ({
  backIcon: {
    width: theme.spacing.xxxl,
    aspectRatio: 1,
  },
}));
