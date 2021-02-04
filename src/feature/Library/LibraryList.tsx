import React, {useCallback} from 'react';
import {styled, THEME} from '../../styled/styled';
import {LibraryListItem} from './components/LibraryListItem';
import {ListRenderItem, StyleSheet} from 'react-native';
import {ILibraryModel} from '../../store/LibraryStore';

interface Props {
  photos: ILibraryModel[];
}

export const LibraryList = ({photos}: Props) => {
  const renderItem: ListRenderItem<ILibraryModel> = useCallback(
    ({item, index}) => <LibraryListItem item={item} index={index} />,
    [],
  );

  const keyExtractor = (item: ILibraryModel) => `${item.id}`;

  return (
    <List
      data={photos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={style.contentContainer}
    />
  );
};

const List = styled.FlatList``;

const Separator = styled.View`
  height: 16px;
`;

const style = StyleSheet.create({
  contentContainer: {
    paddingBottom: THEME.constants.headerHeight * 2 + 16,
    paddingHorizontal: 16,
  },
});
