import React from 'react';
import {styled} from '../../styled/styled';

const hitSlop = {
  bottom: 12,
  left: 12,
  right: 12,
  top: 12,
};

interface Props {
  content: React.FunctionComponent | undefined;
  onPress: () => void | undefined;
}

export const HeaderButton = ({content: Content, onPress}: Props) => {
  return (
    <Button hitSlop={hitSlop} onPress={onPress}>
      {Content ? <Content /> : null}
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
`;
