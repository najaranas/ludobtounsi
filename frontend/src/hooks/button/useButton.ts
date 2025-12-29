import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function useButton(scale: number = 0.9) {
  const animatedopacity = useSharedValue(1);
  const animatedScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: animatedScale.value }],
    opacity: animatedScale.value,
  }));

  const handlePressIn = () => {
    animatedScale.value = withTiming(scale, { duration: 100 });
    animatedopacity.value = withTiming(0.85, { duration: 100 });
  };

  const handlePressOut = () => {
    animatedScale.value = withTiming(1, { duration: 150 });
    animatedopacity.value = withTiming(1, { duration: 150 });
  };
  return {
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
}
