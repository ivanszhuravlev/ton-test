import React from 'react';
import {styled} from '../../styled/styled';
import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';

export interface TextButtonProps {
  text: string;
  onPress: (e: GestureResponderEvent) => void;
  isDisabled?: boolean;
  textStyle?: TextStyle;
  style?: ViewStyle;
}

export const TextButton = ({
  text,
  onPress,
  isDisabled,
  textStyle,
  style,
}: TextButtonProps) => {
  return (
    <Button onPress={onPress} disabled={isDisabled} style={style}>
      <Label isDisabled={isDisabled} style={textStyle}>
        {text}
      </Label>
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
  font-family: ${({theme}) => theme.fonts.medium};
`;
