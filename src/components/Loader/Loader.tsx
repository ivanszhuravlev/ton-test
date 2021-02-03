import React from 'react';
import {ActivityIndicator} from 'react-native';
import {styled, THEME} from '../../styled/styled';

// TODO: Change ActivityIndicator to the custom one
export const Loader = () => {
  return (
    <Container>
      <CardImitation>
        <ActivityIndicator size={'large'} color={THEME.colors.highlight1} />
      </CardImitation>
    </Container>
  );
};

const Container = styled.View``;

const CardImitation = styled.View`
  aspect-ratio: 0.64;
  justify-content: center;
`;
