import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {Header} from '../../components/Header/Header';
import {STRINGS} from '../../strings';
import {observer} from 'mobx-react-lite';
import {MapStore, useInjectStore} from '../../store/useInjectStore';
import {IPhotosStore} from '../../store/PhotosStore';
import {PhotosSwiper} from './PhotosSwiper';
import {InteractionManager} from 'react-native';
import {ILibraryStore} from '../../store/LibraryStore';
import {
  LeftIcon,
  RightIcon,
  PhotosListScreenContainer,
} from './PhotosListScreen.styles';

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
    () => <LeftIcon>{STRINGS['Home.back']}</LeftIcon>,
    [],
  );
  const renderRightButton = useCallback(
    () => <RightIcon name={'heart'} size={24} />,
    [],
  );

  useEffect(() => {}, []);

  return (
    <PhotosListScreenContainer>
      <Header
        renderLeftIcon={renderLeftButton}
        renderRightIcon={renderRightButton}
        title={STRINGS['Home.title']}
      />
      {photos.length ? (
        <PhotosSwiper photos={photos} onLeft={onLeft} onRight={onRight} />
      ) : null}
    </PhotosListScreenContainer>
  );
});
