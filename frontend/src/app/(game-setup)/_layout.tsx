import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}>
      <Stack.Screen
        name="select-player-count"
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="player-setup"
        options={{
          animation: "fade",
        }}
      />
    </Stack>
  );
}
