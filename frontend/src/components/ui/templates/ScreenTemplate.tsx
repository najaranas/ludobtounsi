import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors, spacing } from "../../../constants/theme";

interface ScreenTemplateProps {
  children: React.ReactNode;
  withSafeArea?: boolean;
}

/**
 * ScreenTemplate - Base layout for all screens
 * Provides consistent padding and background
 */
export function ScreenTemplate({
  children,
  withSafeArea = true,
}: ScreenTemplateProps) {
  const Container = withSafeArea ? SafeAreaView : View;

  return (
    <Container style={styles.container}>
      <View style={styles.content}>{children}</View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
});
