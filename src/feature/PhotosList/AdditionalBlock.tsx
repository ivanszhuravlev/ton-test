import React from 'react';
import Animated from 'react-native-reanimated';
import {styled} from '../../styled/styled';

interface Props {
  children: React.ReactNode;
  moveState: Animated.Value<number>;
  delay?: number;
}

export const AdditionalBlock = ({children, moveState, delay = 0}: Props) => {
  const paddingTop = moveState.interpolate({
    inputRange: [0, delay, 1],
    outputRange: [32, 32, 16],
  });

  const animatedStyle = {
    paddingTop,
  };

  return <Container style={animatedStyle}>{children}</Container>;
};

const Container = styled(Animated.View)`
  position: absolute;
  padding-horizontal: 48px;
`;
