import React from 'react';
import {styled} from '../../styled/styled';
import {Button} from './Button';

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
      <Half>
        <Touchable onPress={onLeft}>
          <LeftButton
            highlighted={leftHighlighted}
            disabled={rightHighlighted}
          />
        </Touchable>
      </Half>
      <Half>
        <Touchable onPress={onRight}>
          <RightButton
            highlighted={rightHighlighted}
            disabled={leftHighlighted}
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

const LeftButton = styled(Button)``;

const RightButton = styled(Button)``;
