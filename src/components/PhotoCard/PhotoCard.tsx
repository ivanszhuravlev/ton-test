import React from 'react';
import {styled} from '../../styled/styled';
import {ImageProps} from 'react-native';

interface Props extends ImageProps {}

export const PhotoCard = ({...props}: Props) => {
  return <Image {...props} />;
};

const Image = styled.Image`
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  aspect-ratio: 0.64;
`;
