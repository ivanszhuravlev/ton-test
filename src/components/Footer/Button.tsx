import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {StyleProp} from 'react-native';
import {styled} from '../../styled/styled';
import {useButtonAnimation} from './useButtonAnimation';
import CustomIcon from '../CustomIcon/CustomIcon';

interface Props {
  highlighted: boolean;
  disabled: boolean;
  style?: StyleProp<any>;
  iconName: string;
}

export const Button = memo(
  ({highlighted, disabled, style, iconName}: Props) => {
    const animatedStyle = useButtonAnimation(highlighted, disabled);

    return (
      <ButtonStyled style={[style, animatedStyle]}>
        <CustomIconStyled name={iconName} size={24} />
      </ButtonStyled>
    );
  },
);

const ButtonStyled = styled(Animated.View)`
  height: 56px;
  width: 56px;
  border-radius: 28px;

  align-items: center;
  justify-content: center;
  box-shadow: 0px 16px 24px ${({theme}) => theme.colors.shadowBig};
  elevation: 4;
`;

const CustomIconStyled = styled(CustomIcon)`
  color: ${({theme}) => theme.colors.textContrast};
`;
