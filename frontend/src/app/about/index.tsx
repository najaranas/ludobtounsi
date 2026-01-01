import { SafeContent } from "@/components/ui/atoms/SafeContent";
import BackButton from "@/components/ui/molecules/Buttons/BackButton";
import PageTitle from "@/components/ui/molecules/PageTitle";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SocialButton from "@/components/ui/molecules/Buttons/SocialButton";
import {
  APP_CREDITS,
  APP_DESCRIPTION,
  APP_NAME,
  APP_VERSION,
} from "@/constants/about";

/**
 * AboutScreen - Simple & clean
 */

export default function AboutScreen() {
  return (
    <SafeContent style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <PageTitle title="About" />

          {/* App Info */}
          <Text style={styles.appName}>{APP_NAME}</Text>
          <Text style={styles.meta}>{`Version ${APP_VERSION}`}</Text>

          {/* Description */}
          <Text style={styles.description}>{APP_DESCRIPTION}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Developer */}
          <Text style={styles.devName}>{APP_CREDITS.developer}</Text>
          <Text style={styles.devRole}>{APP_CREDITS.role}</Text>

          {/* Social Links */}
          <View style={styles.socials}>
            <SocialButton
              icon="logo-linkedin"
              url={APP_CREDITS.developerSocialsMedia.linkedin}
            />
            <SocialButton
              icon="logo-x"
              url={APP_CREDITS.developerSocialsMedia.twitter}
            />
            <SocialButton
              icon="mail"
              url={`mailto:${APP_CREDITS.developerSocialsMedia.mail}`}
            />
          </View>

          {/* Footer */}
          <Text style={styles.footer}>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </Text>

          <BackButton />
        </View>
      </View>
    </SafeContent>
  );
}

const styles = StyleSheet.create((theme) => ({
  safeContainer: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  container: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: "center",
  },
  content: {
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: "#EEA12D",
    backgroundColor: theme.colors.background.accent,
    padding: theme.spacing.lg,
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  appName: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.primary,
  },
  tagline: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
  },
  meta: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.muted,
  },
  description: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    textAlign: "center",
    marginTop: theme.spacing.sm,
    lineHeight: 20,
  },

  divider: {
    width: "60%",
    height: 1,
    backgroundColor: "#EEA12D",
    opacity: 0.8,
    marginVertical: theme.spacing.md,
  },

  devName: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.primary,
  },
  devRole: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.muted,
    marginBottom: theme.spacing.sm,
  },

  socials: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },

  footer: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.muted,
    marginTop: theme.spacing.sm,
  },
}));
