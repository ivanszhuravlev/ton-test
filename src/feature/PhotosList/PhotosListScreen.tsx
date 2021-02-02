import React, {useCallback, useEffect} from 'react';
import {Header} from '../../components/Header/Header';
import {styled} from '../../styled/styled';
import {TextButton} from '../../components/TextButton/TextButton';
import {STRINGS} from '../../strings';
import {observer} from 'mobx-react-lite';
import {MapStore, useInjectStore} from '../../store/useInjectStore';
import {IPhotosStore} from '../../store/PhotosStore';
import {PhotosSwiper} from './PhotosSwiper';
import {useSwiper} from './useSwiper';
import {Footer} from '../../components/Footer/Footer';

type MappedStore = {
  photosStore: IPhotosStore;
};

const mapStore: MapStore<MappedStore> = (rootStore) => ({
  photosStore: rootStore.photosStore,
});

export const PhotosListScreen = observer(() => {
  const {transX, handlePan, swiperState} = useSwiper();
  const {photosStore} = useInjectStore(mapStore);

  const getPhotos = () => photosStore.getPhotos();

  useEffect(() => {
    getPhotos();
  }, []);

  const onUndo = useCallback(() => {}, []);
  const renderLeftButton = useCallback(
    () => <TextButton onPress={onUndo} text={STRINGS['Home.back']} />,
    [],
  );
  const renderRightButton = useCallback(() => null, []);

  useEffect(() => {}, []);

  return (
    <Container>
      <Header
        renderLeftButton={renderLeftButton}
        renderRightButton={renderRightButton}
        title={STRINGS['Home.title']}
      />
      <PhotosSwiper
        photos={photosStore.photos.slice(0, 3)}
        transX={transX}
        handlePan={handlePan}
      />
      <Footer
        leftHighlighted={swiperState === 'left'}
        rightHighlighted={swiperState === 'right'}
      />
    </Container>
  );
});

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;
