import React, {useCallback} from 'react';
import {Header} from '../../components/Header/Header';
import {styled} from '../../styled/styled';
import {TextButton} from '../../components/TextButton/TextButton';
import {STRINGS} from '../../strings';

export const PhotosListScreen = () => {
  const onLeftPress = useCallback(() => {}, []);
  const renderLeftButton = useCallback(
    () => <TextButton onPress={onLeftPress} text={STRINGS['Home.back']} />,
    [],
  );
  const renderRightButton = useCallback(() => null, []);

  return (
    <Container>
      <Header
        renderLeftButton={renderLeftButton}
        renderRightButton={renderRightButton}
        title={STRINGS['Home.title']}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
