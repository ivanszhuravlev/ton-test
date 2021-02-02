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
import {moveConfigs, offsetLimit} from './constants';

export type SwiperState = 'none' | 'left' | 'right';

const getConditions = (x: Animated.Node<number>, state: State) => ({
  canceled: or(eq(state, State.END), eq(state, State.CANCELLED)),
  wentLeft: lessThan(x, -offsetLimit),
  wentRight: greaterThan(x, offsetLimit),
  wentNone: and(greaterThan(x, -offsetLimit), lessThan(x, offsetLimit)),
  complete: eq(state, State.END),
});

export const useSwiper = () => {
  const [swiperState, setSwiperState] = useState<SwiperState>('none');
  const transX = useRef(new Animated.Value(0)).current;

  const highlightLeft = useCallback(() => setSwiperState('left'), []);
  const highlightRight = useCallback(() => setSwiperState('right'), []);
  const highlightNone = useCallback(() => setSwiperState('none'), []);

  const resetState = () => timing(transX, moveConfigs.reset).start();
  const moveRight = () => timing(transX, moveConfigs.right).start();
  const moveLeft = () => timing(transX, moveConfigs.left).start();

  const handlePan = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, state: state}) => {
          const newX = multiply(x, 1.1);
          const {
            canceled,
            wentLeft,
            wentRight,
            wentNone,
            complete,
          } = getConditions(newX, state);

          return block([
            set(transX, newX),
            cond(wentRight, [call([], highlightRight)]),
            cond(wentLeft, [call([], highlightLeft)]),
            cond(wentNone, [call([], highlightNone)]),
            cond(canceled, [call([], resetState)]),
            cond(and(complete, wentRight), [call([], moveRight)]),
            cond(and(complete, wentLeft), [call([], moveLeft)]),
          ]);
        },
      },
    ]);
  }, [transX]);

  return {transX, handlePan, swiperState};
};
