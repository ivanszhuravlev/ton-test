import React from 'react';
import {styled} from '../../styled/styled';

interface Props {
  renderLeftIcon: () => React.ReactNode;
  renderRightIcon: () => React.ReactNode;
  onLeft?: () => void;
  onRight?: () => void;
  title: string;
}

const hitSlop = {
  bottom: 12,
  left: 12,
  right: 12,
  top: 12,
};

export const Header = ({
  renderLeftIcon,
  title,
  renderRightIcon,
  onLeft,
  onRight,
}: Props) => {
  return (
    <Container>
      <LeftHeaderButton hitSlop={hitSlop} onPress={onLeft}>
        {renderLeftIcon()}
      </LeftHeaderButton>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <RightHeaderButton hitSlop={hitSlop} onPress={onRight}>
        {renderRightIcon()}
      </RightHeaderButton>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: 56px;
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

const LeftHeaderButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
`;

const RightHeaderButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
`;
