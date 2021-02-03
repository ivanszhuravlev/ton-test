import {styled} from '../../../styled/styled';

export const StatusLabel = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.info}px;
  color: ${({theme}) => theme.colors.textGrey};
  letter-spacing: 0.75px;
  line-height: 20px;
  text-align: center;
`;
