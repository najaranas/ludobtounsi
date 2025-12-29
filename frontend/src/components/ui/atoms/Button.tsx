import useButton from "@/hooks/button/useButton";
import React from "react";
import { Pressable, PressableProps } from "react-native";
import { createAnimatedComponent } from "react-native-reanimated";
interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  scale?: number;
}

const AnimatedPressable = createAnimatedComponent(Pressable);

export const Button = ({
  children,
  scale = 0.9,
  style,
  ...props
}: ButtonProps) => {
  const { animatedStyle, handlePressIn, handlePressOut } = useButton(scale);
  return (
    <AnimatedPressable
      {...props}
      style={[style, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      {children}
    </AnimatedPressable>
  );
};
