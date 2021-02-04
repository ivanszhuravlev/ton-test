import React, {memo} from 'react';
import {isEqual} from 'lodash';
import {styled} from '../../../styled/styled';
import {ILibraryModel} from '../../../store/LibraryStore';
import {formatTimestamp} from '../../../utils/time';

interface Props {
  item: ILibraryModel;
  index: number;
}

export const LibraryListItem = memo(({item, index}: Props) => {
  const source = {uri: item.img_src};
  const hasOffset = (index + 1) % 2 !== 0;
  const date = formatTimestamp(item.timestamp);

  return (
    <Container hasOffset={hasOffset}>
      <ImageWrapper>
        <Image source={source} resizeMode={'cover'} />
      </ImageWrapper>
      <Label>{date}</Label>
    </Container>
  );
}, isEqual);

interface ContainerProps {
  hasOffset: boolean;
}

const Container = styled.View<ContainerProps>`
  flex: 0.5;
  margin-right: ${({hasOffset}) => (hasOffset ? 16 : 0)}px;
`;

const ImageWrapper = styled.View`
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  aspect-ratio: 1;
  flex: 1;
  box-shadow: 0px 16px 24px ${({theme}) => theme.colors.shadowBig};
`;

const Image = styled.Image`
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  flex: 1;
`;

const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.info}px;
  color: ${({theme}) => theme.colors.textGrey};
  letter-spacing: 0.75px;
  line-height: 20px;
  text-align: center;
  margin-top: 8px;
`;
