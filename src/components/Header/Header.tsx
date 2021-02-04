import React from 'react';
import {styled} from '../../styled/styled';
import {HeaderButton} from './HeaderButton';

interface Props {
  leftContent?: React.FunctionComponent;
  rightContent?: React.FunctionComponent;
  onLeft?: () => void;
  onRight?: () => void;
  title: string;
}

export const Header = ({
  leftContent,
  title,
  rightContent,
  onLeft,
  onRight,
}: Props) => {
  return (
    <Container>
      <HeaderButton content={leftContent} onPress={onLeft} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <HeaderButton content={rightContent} onPress={onRight} />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: ${({theme}) => theme.constants.headerHeight}px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;

const TitleContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 18px;
  letter-spacing: 0.5px;
  color: ${({theme}) => theme.colors.text};
`;
