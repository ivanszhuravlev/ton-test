import React from 'react';
import Animated from 'react-native-reanimated';
import {styled} from '../../styled/styled';

interface Props {
  children: React.ReactNode;
  initialTop: number;
  initialHor: number;
  moveState: Animated.Value<number>;
  delay?: number;
}

export const AnimatedContainer = ({
  children,
  initialTop,
  initialHor,
  moveState,
  delay = 0,
}: Props) => {
  const paddingTop = moveState.interpolate({
    inputRange: [0, delay, 1],
    outputRange: [initialTop, initialTop, initialTop + 16],
  });
  const paddingHorizontal = moveState.interpolate({
    inputRange: [0, delay, 1],
    outputRange: [initialHor, initialHor, initialHor - 16],
  });

  const animatedStyle = {
    paddingTop,
    paddingHorizontal,
  };

  return <Container style={animatedStyle}>{children}</Container>;
};

const Container = styled(Animated.View)`
  position: absolute;
`;
