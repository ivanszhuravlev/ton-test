import {useEffect, useRef} from 'react';
import Animated, {Easing, timing} from 'react-native-reanimated';

const animateButton = (param: Animated.Value<number>, toValue: number) =>
  timing(param, {
    duration: 200,
    toValue,
    easing: Easing.inOut(Easing.ease),
  }).start();

export const useButtonAnimation = (highlighted: boolean, disabled: boolean) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const highlightButton = () => animateButton(scale, 1.29);
  const disableButton = () => animateButton(opacity, 0.5);
  const resetButton = () => {
    animateButton(opacity, 1);
    animateButton(scale, 1);
  };

  useEffect(() => {
    highlighted && highlightButton();
    disabled && disableButton();
    !highlighted && !disabled && resetButton();
  }, [highlighted, disabled]);

  return {opacity, transform: [{scale}]};
};
