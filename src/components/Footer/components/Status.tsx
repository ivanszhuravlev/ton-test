import React from 'react';
import {styled} from '../../../styled/styled';
import {observer} from 'mobx-react-lite';
import {IPhotosStore} from '../../../store/PhotosStore';
import {ILibraryStore} from '../../../store/LibraryStore';
import {MapStore, useInjectStore} from '../../../store/useInjectStore';
import {StatusLabel} from './Status.styles';
import {CardsCount} from './CardsCount';
import {STRINGS} from '../../../strings';

type MappedStore = {
  photosStore: IPhotosStore;
};

const mapStore: MapStore<MappedStore> = (rootStore) => ({
  photosStore: rootStore.photosStore,
});

export const Status = observer(() => {
  const {photosStore} = useInjectStore(mapStore);
  const {cardsCount, isLoading} = photosStore;

  return (
    <Container>
      {isLoading ? (
        <StatusLabel>{STRINGS['Status.downloading']}</StatusLabel>
      ) : (
        <StatusLabel>
          {cardsCount} {STRINGS['Status.cards']}
        </StatusLabel>
      )}
    </Container>
  );
});

const Container = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 100%;
  height: 100%;
`;
