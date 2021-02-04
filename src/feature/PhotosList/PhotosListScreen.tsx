import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {NavigationProp} from '@react-navigation/native';
import {debounce} from 'lodash';
import {Header} from '../../components/Header/Header';
import {ContentContainer} from '../../components/ContentContainer/ContentContainer';
import {STRINGS} from '../../strings';
import {MapStore, useInjectStore} from '../../store/useInjectStore';
import {IPhotosStore} from '../../store/PhotosStore';
import {PhotosSwiper} from './PhotosSwiper';
import {RootStackParams} from '../../navigation/RootStack';
import {ButtonLibrary, ButtonUndo} from './components/PhotosListHeaderButtons';

interface Props {
  navigation: NavigationProp<RootStackParams, 'Home'>;
}

type MappedStore = {
  photosStore: IPhotosStore;
};

const mapStore: MapStore<MappedStore> = (rootStore) => ({
  photosStore: rootStore.photosStore,
});

const getPhotosDebounced = debounce(
  (getter: () => void, shouldCall) => shouldCall && getter(),
  1000,
);

export const PhotosListScreen = observer(({navigation}: Props) => {
  const {photosStore} = useInjectStore(mapStore);
  const photos = photosStore.photos.slice(0, 4).reverse();
  const photosCount = photosStore.cardsCount;

  useEffect(() => {
    getPhotosDebounced(photosStore.getPhotos, photosCount <= 5);
  }, [photosCount]);

  const onUndo = useCallback(() => {}, []);
  const onLibrary = useCallback(() => navigation.navigate('Library'), []);
  const onLeft = useCallback(() => photosStore.removePhoto(), []);
  const onRight = useCallback(() => photosStore.likePhoto(), []);

  return (
    <View>
      <Header
        onLeft={onUndo}
        onRight={onLibrary}
        leftContent={ButtonUndo}
        rightContent={ButtonLibrary}
        title={STRINGS['Home.title']}
      />
      <ContentContainer>
        <PhotosSwiper
          photos={photos}
          onLeft={onLeft}
          onRight={onRight}
          isLoading={photosStore.isLoading}
        />
      </ContentContainer>
    </View>
  );
});
