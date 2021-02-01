import React from 'react';
import {styled} from '../../styled/styled';
import {GestureResponderEvent} from 'react-native';

interface Props {
  text: string;
  onPress: (e: GestureResponderEvent) => void;
  isDisabled?: boolean;
}

export const TextButton = ({text, onPress, isDisabled}: Props) => {
  return (
    <Button onPress={onPress} disabled={isDisabled}>
      <Label isDisabled={isDisabled}>{text}</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity``;

interface ILabelButton {
  isDisabled: boolean;
}

const Label = styled.Text<ILabelButton>`
  color: ${({isDisabled, theme}) =>
    isDisabled ? theme.colors.disabled : theme.colors.highlight1};
`;
