import React, {useEffect, useState} from 'react';
import Animated, {Easing, timing, useValue} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {IPhotoModel} from '../../store/shared';
import {styled} from '../../styled/styled';
import {PhotoCard} from '../../components/PhotoCard/PhotoCard';
import {Footer} from '../../components/Footer/Footer';
import {useSwiper} from './useSwiper';
import {AnimatedContainer} from './AnimatedContainer';
import {AdditionalBlock} from './AdditionalBlock';

interface Props {
  photos: IPhotoModel[];
  onLeft: () => void;
  onRight: () => void;
}

export const PhotosSwiper = ({photos, onLeft, onRight}: Props) => {
  const photosChangeFlag = photos[0].id;
  const [safePhotos, setSafePhotos] = useState(photos);
  const moveState = useValue(0);

  const afterMove = () => {
    setSafePhotos([...safePhotos.slice(0, 3), photos[3]]);
  };

  useEffect(() => {
    if (photos[0].id !== safePhotos[0].id) {
      moveCards();
      setTimeout(() => {
        resetState();
        moveState.setValue(0);
        setSafePhotos(photos);
      }, 400);
    }
  }, [photosChangeFlag]);

  const moveCards = () =>
    timing(moveState, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start(afterMove);

  const handleLeft = () => {
    onLeft();
  };
  const handleRight = () => {
    onRight();
  };

  const {transX, handlePan, swiperState, resetState} = useSwiper(
    handleLeft,
    handleRight,
  );

  const animatedStyle = {transform: [{translateX: transX}]};

  const renderItem = (item: IPhotoModel, index: number) => {
    const Photo = <PhotoCardStyled source={{uri: item.img_src}} />;
    switch (index) {
      case 3:
        return (
          <PanGestureHandler
            onGestureEvent={handlePan}
            onHandlerStateChange={handlePan}>
            <FirstContainer style={animatedStyle}>{Photo}</FirstContainer>
          </PanGestureHandler>
        );
      case 2:
        return (
          <AnimatedContainer
            initialTop={32}
            initialHor={32}
            moveState={moveState}>
            {Photo}
          </AnimatedContainer>
        );
      case 1:
        return (
          <AnimatedContainer
            initialTop={16}
            initialHor={48}
            delay={0.7}
            moveState={moveState}>
            {Photo}
          </AnimatedContainer>
        );
      case 0:
        return (
          <AdditionalBlock delay={0.7} moveState={moveState}>
            {Photo}
          </AdditionalBlock>
        );
    }
  };

  const renderCards = () => safePhotos.map(renderItem);

  return (
    <Container>
      {renderCards()}
      <Footer
        leftHighlighted={swiperState === 'left'}
        rightHighlighted={swiperState === 'right'}
      />
    </Container>
  );
};

const Container = styled.View``;

const FirstContainer = styled(Animated.View)`
  padding-top: 48px;
  padding-horizontal: 16px;
`;

const PhotoCardStyled = styled(PhotoCard)`
  width: 100%;
`;
