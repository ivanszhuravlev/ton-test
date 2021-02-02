import {useCallback, useMemo, useRef, useState} from 'react';
import Animated, {
  and,
  block,
  call,
  cond,
  eq,
  greaterThan,
  lessThan,
  multiply,
  or,
  set,
  timing,
  Easing,
} from 'react-native-reanimated';
import {DEVICE_WIDTH} from '../../constants';
import {State} from 'react-native-gesture-handler';

export type SwiperState = 'none' | 'left' | 'right';

const offsetLimit = DEVICE_WIDTH / 6;

const configs = {
  reset: {
    duration: 100,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  },
};

const getConditions = (x: Animated.Node<number>, state: State) => ({
  canceled: or(eq(state, State.END), eq(state, State.CANCELLED)),
  wentLeft: lessThan(x, -offsetLimit),
  wentRight: greaterThan(x, offsetLimit),
  wentNone: and(greaterThan(x, -offsetLimit), lessThan(x, offsetLimit)),
});

export const useSwiper = () => {
  const [swiperState, setSwiperState] = useState<SwiperState>('none');
  const transX = useRef(new Animated.Value(0)).current;

  const goLeft = useCallback(() => setSwiperState('left'), []);
  const goRight = useCallback(() => setSwiperState('right'), []);
  const goNone = useCallback(() => setSwiperState('none'), []);

  const resetState = () => timing(transX, configs.reset).start();

  const handlePan = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, state: state}) => {
          const newX = multiply(x, 1.1);
          const {canceled, wentLeft, wentRight, wentNone} = getConditions(
            newX,
            state,
          );

          return block([
            set(transX, newX),
            cond(wentRight, [call([], goRight)]),
            cond(wentLeft, [call([], goLeft)]),
            cond(wentNone, [call([], goNone)]),
            cond(canceled, [call([], resetState)]),
          ]);
        },
      },
    ]);
  }, [transX]);

  return {transX, handlePan, swiperState};
};
