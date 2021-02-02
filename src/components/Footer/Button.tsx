import React, {memo, useEffect, useRef} from 'react';
import Animated, {Easing, timing} from 'react-native-reanimated';
import {StyleProp} from 'react-native';
import {styled} from '../../styled/styled';
import {useButtonAnimation} from './useButtonAnimation';

interface Props {
  highlighted: boolean;
  disabled: boolean;
  style?: StyleProp<any>;
}

export const Button = memo(({highlighted, disabled, style}: Props) => {
  const animatedStyle = useButtonAnimation(highlighted, disabled);

  return <ButtonStyled style={[style, animatedStyle]} />;
});

const ButtonStyled = styled(Animated.View)`
  height: 56px;
  width: 56px;
  background-color: #ff00ff;
  border-radius: 28px;
`;
