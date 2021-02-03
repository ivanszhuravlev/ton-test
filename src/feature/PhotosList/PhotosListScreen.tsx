import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {Header} from '../../components/Header/Header';
import {styled} from '../../styled/styled';
import {TextButton} from '../../components/TextButton/TextButton';
import {STRINGS} from '../../strings';
import {observer} from 'mobx-react-lite';
import {MapStore, useInjectStore} from '../../store/useInjectStore';
import {IPhotosStore} from '../../store/PhotosStore';
import {PhotosSwiper} from './PhotosSwiper';
import {InteractionManager} from 'react-native';
import {ILibraryStore} from '../../store/LibraryStore';

type MappedStore = {
  photosStore: IPhotosStore;
  libraryStore: ILibraryStore;
};

const mapStore: MapStore<MappedStore> = (rootStore) => ({
  photosStore: rootStore.photosStore,
  libraryStore: rootStore.libraryStore,
});

export const PhotosListScreen = observer(() => {
  const {photosStore, libraryStore} = useInjectStore(mapStore);
  const photos = photosStore.photos.slice(0, 4).reverse();
  const [currentPhoto] = photos;

  const getInitialPhotos = useCallback(
    () => !photosStore.photos.length && photosStore.getPhotos(),
    [photosStore.photos.length],
  );

  const init = () => InteractionManager.runAfterInteractions(getInitialPhotos);

  useLayoutEffect(() => {
    init();
  }, []);

  const onUndo = useCallback(() => {}, []);
  const onLeft = () => photosStore.removePhoto();
  const onRight = () => {
    libraryStore.addToLibrary(currentPhoto);
    photosStore.removePhoto();
  };

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
      {photos.length ? (
        <PhotosSwiper photos={photos} onLeft={onLeft} onRight={onRight} />
      ) : null}
    </Container>
  );
});

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;
