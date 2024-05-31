import React, { ReactNode, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface JumpingItemProps {
  children: ReactNode;
  style?: object;
  offset?: { x?: number; y?: number };
  jumpingDuration?: number;
}

const JumpingItem: React.FC<JumpingItemProps> = ({
  children,
  style,
  offset,
  jumpingDuration,
}) => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const getJumpWithRepeat = (offset?: number) => {
    return withRepeat(
      withTiming(offset || 0, {
        duration: jumpingDuration || 500,
      }),
      -1,
      true
    );
  };

  useEffect(() => {
    offsetX.value = getJumpWithRepeat(offset?.x);
    offsetY.value = getJumpWithRepeat(offset?.y);
  }, [offsetX, offsetY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetY.value }, { translateX: offsetX.value }],
    };
  });

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

export default JumpingItem;
