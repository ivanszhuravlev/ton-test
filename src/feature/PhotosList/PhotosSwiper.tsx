import React from 'react';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {IPhotoModel} from '../../store/shared';
import {styled} from '../../styled/styled';
import {PhotoCard} from '../../components/PhotoCard/PhotoCard';

interface Props {
  photos: IPhotoModel[];
  transX: Animated.Value<number>;
  handlePan: () => void;
}

export const PhotosSwiper = ({photos, handlePan, transX}: Props) => {
  const [first, second, third] = photos;

  return photos.length ? (
    <Container>
      <ThirdContainer>
        <PhotoCardStyled source={{uri: third.img_src}} />
      </ThirdContainer>
      <SecondContainer>
        <PhotoCardStyled source={{uri: second.img_src}} />
      </SecondContainer>
      <PanGestureHandler
        onGestureEvent={handlePan}
        onHandlerStateChange={handlePan}>
        <FirstContainer style={{transform: [{translateX: transX}]}}>
          <PhotoCardStyled source={{uri: first.img_src}} />
        </FirstContainer>
      </PanGestureHandler>
    </Container>
  ) : null;
};

const Container = styled.View``;

const ThirdContainer = styled.View`
  position: absolute;
  padding-top: 16px;
  padding-horizontal: 48px;
`;

const SecondContainer = styled.View`
  position: absolute;
  padding-top: 32px;
  padding-horizontal: 32px;
`;

const FirstContainer = styled(Animated.View)`
  padding-top: 48px;
  padding-horizontal: 16px;
`;

const PhotoCardStyled = styled(PhotoCard)`
  width: 100%;
`;
