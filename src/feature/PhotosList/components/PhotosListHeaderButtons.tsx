import React from 'react';
import {STRINGS} from '../../../strings';
import {styled} from '../../../styled/styled';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';

export const ButtonUndo = () => <LeftIcon>{STRINGS['Home.back']}</LeftIcon>;

export const ButtonLibrary = () => <RightIcon name={'heart'} size={24} />;

export const RightIcon = styled(CustomIcon)`
  color: ${({theme}) => theme.colors.highlight1};
`;

export const LeftIcon = styled.Text`
  font-size: ${({theme}) => theme.fontSize.button}px;
  letter-spacing: 0.25px;
  color: ${({theme}) => theme.colors.highlight1};
`;
