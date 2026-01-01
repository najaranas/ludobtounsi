import useButtonAnimation from "@/hooks/button/useButtonAnimation";
import { SoundService } from "@/services/sound";
import React from "react";
import { GestureResponderEvent, Pressable, PressableProps } from "react-native";
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
  onPress,
  ...props
}: ButtonProps) => {
  const { animatedStyle, handlePressIn, handlePressOut } =
    useButtonAnimation(scale);

  const onPressHandler = (event: GestureResponderEvent) => {
    SoundService.play("ButtonClick");
    onPress?.(event);
  };
  return (
    <AnimatedPressable
      {...props}
      style={[style, animatedStyle]}
      onPress={onPressHandler}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      {children}
    </AnimatedPressable>
  );
};
