import React from 'react';
import {styled} from '../../../styled/styled';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';

export const ButtonGoBack = () => {
  return <RightIcon name={'arrow_back'} size={24} />;
};

export const RightIcon = styled(CustomIcon)`
  color: ${({theme}) => theme.colors.highlight1};
`;
