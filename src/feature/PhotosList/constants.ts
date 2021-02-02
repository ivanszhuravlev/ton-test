import {DEVICE_WIDTH} from '../../constants';
import {Easing} from 'react-native-reanimated';

export const offsetLimit = DEVICE_WIDTH - DEVICE_WIDTH / 3;

export const moveConfigs = {
  reset: {
    duration: 100,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  },
  right: {
    duration: 100,
    toValue: DEVICE_WIDTH,
    easing: Easing.inOut(Easing.ease),
  },
  left: {
    duration: 100,
    toValue: -DEVICE_WIDTH,
    easing: Easing.inOut(Easing.ease),
  },
};
