import React from 'react';
import {styled} from '../../styled/styled';

interface Props {
  renderLeftButton: () => React.ReactNode;
  renderRightButton: () => React.ReactNode;
  title: string;
}

export const Header = ({renderLeftButton, title, renderRightButton}: Props) => {
  return (
    <Container>
      <LeftButtonContainer>{renderLeftButton()}</LeftButtonContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <RightButtonContainer>{renderRightButton()}</RightButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  text-align: center;
`;

const LeftButtonContainer = styled.View`
  color: ${({theme}) => theme.colors.highlight1};
`;

const RightButtonContainer = styled.View`
  color: ${({theme}) => theme.colors.highlight1};
  height: 100%;
  width: auto;
`;
