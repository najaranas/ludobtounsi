export const SettingsActions = {
  SOUND: "sound",
} as const;

export type SettingsAction =
  (typeof SettingsActions)[keyof typeof SettingsActions];

export interface SettingsActionConfig {
  id: SettingsAction;
  label: string;
  accessibilityLabel: string;
}

export const QUICK_ACTION_CONFIGS: SettingsActionConfig[] = [
  {
    id: SettingsActions.SOUND,
    label: "Sound",
    accessibilityLabel: "Toggle sound",
  },
];
