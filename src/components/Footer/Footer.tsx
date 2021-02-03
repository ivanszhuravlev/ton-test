import React from 'react';
import {styled} from '../../styled/styled';
import {Button} from './Button';
import {Status} from './components/Status';

interface Props {
  leftHighlighted: boolean;
  rightHighlighted: boolean;
  onLeft: () => void;
  onRight: () => void;
}

export const Footer = ({
  leftHighlighted,
  rightHighlighted,
  onLeft,
  onRight,
}: Props) => {
  return (
    <Container>
      <Status />
      <Half>
        <Touchable onPress={onLeft}>
          <LeftButton
            highlighted={leftHighlighted}
            disabled={rightHighlighted}
            iconName={'thumbs-down'}
          />
        </Touchable>
      </Half>
      <Half>
        <Touchable onPress={onRight}>
          <RightButton
            highlighted={rightHighlighted}
            disabled={leftHighlighted}
            iconName={'thumbs-up'}
          />
        </Touchable>
      </Half>
    </Container>
  );
};

const Container = styled.View`
  height: 56px;
  width: 100%;
  flex-direction: row;
`;

const Half = styled.View`
  flex: 1;
  align-items: center;
  top: -28px;
`;

const Touchable = styled.TouchableOpacity``;

const LeftButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.highlight2};
  padding-top: 2px;
`;

const RightButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.highlight1};
  padding-bottom: 2px;
`;
