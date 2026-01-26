import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type ArrowDirection = "left" | "right";

interface UseTurnArrowAnimationProps {
  direction: ArrowDirection;
}

export default function useTurnArrowAnimation({
  direction,
}: UseTurnArrowAnimationProps) {
  const translateXOffset = direction === "left" ? 10 : -10;
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(translateXOffset, {
        duration: 500,
      }),
      -1,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateXOffset]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return {
    animatedStyle,
  };
}
