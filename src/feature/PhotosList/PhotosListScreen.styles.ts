import {styled} from '../../styled/styled';
import CustomIcon from '../../components/CustomIcon/CustomIcon';

export const LeftIcon = styled.Text`
  font-size: ${({theme}) => theme.fontSize.button}px;
  letter-spacing: 0.25px;
  color: ${({theme}) => theme.colors.highlight1};
`;

export const PhotosListScreenContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const RightIcon = styled(CustomIcon)`
  color: ${({theme}) => theme.colors.highlight1};
`;
