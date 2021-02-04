import React, {useCallback} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {View} from 'react-native';
import {RootStackParams} from '../../navigation/RootStack';
import {ILibraryStore} from '../../store/LibraryStore';
import {MapStore, useInjectStore} from '../../store/useInjectStore';
import {Header} from '../../components/Header/Header';
import {styled} from '../../styled/styled';
import {ButtonGoBack} from './components/ButtonGoBack';
import {STRINGS} from '../../strings';
import {ContentContainer} from '../../components/ContentContainer/ContentContainer';
import {LibraryList} from './LibraryList';

interface Props {
  navigation: NavigationProp<RootStackParams, 'Library'>;
}

type MappedStore = {
  libraryStore: ILibraryStore;
};

const mapStore: MapStore<MappedStore> = (rootStore) => ({
  libraryStore: rootStore.libraryStore,
});

export const LibraryScreen = observer(({navigation}: Props) => {
  const {libraryStore} = useInjectStore(mapStore);

  const onGoBack = useCallback(() => navigation.goBack(), []);

  return (
    <View>
      <Header
        leftContent={ButtonGoBack}
        onLeft={onGoBack}
        title={STRINGS['Library.title']}
      />
      <ContentContainerStyled>
        <LibraryList photos={libraryStore.photos} />
      </ContentContainerStyled>
    </View>
  );
});

const ContentContainerStyled = styled(ContentContainer)`
  padding-horizontal: 0;
`;
