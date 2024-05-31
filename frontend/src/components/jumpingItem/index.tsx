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
  jumpingDuration?: { x?: number; y?: number };
}
/**make the appearance of jumping
 * @param offset - enter an object with x and y values to choose the offset of the jump
 * @param jumpingDuration - enter an object with x and y values to choose the speed of the movement on the axis
 */
const JumpingItem: React.FC<JumpingItemProps> = ({
  children,
  style,
  offset,
  jumpingDuration,
}) => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const getJumpWithRepeat = (offset?: number, duration?: number) => {
    return withRepeat(
      withTiming(offset || 0, {
        duration: duration || 500,
      }),
      -1,
      true
    );
  };

  useEffect(() => {
    offsetX.value = getJumpWithRepeat(offset?.x, jumpingDuration?.x);
    offsetY.value = getJumpWithRepeat(offset?.y, jumpingDuration?.y);
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
