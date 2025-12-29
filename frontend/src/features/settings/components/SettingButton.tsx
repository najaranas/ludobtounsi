import { PressableProps } from "react-native";
import React from "react";
import { Button } from "@/components/ui";

interface SettingButtonProps extends PressableProps {
  label: string;
  accessibilityLabel: string;
}

export default function SettingButton({ label, ...props }: SettingButtonProps) {
  return <Button {...props}>{label}</Button>;
}
