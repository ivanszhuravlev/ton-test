import React, {memo, useMemo} from 'react';
import {styled, THEME} from '../../styled/styled';
import {ImageProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {formatISO} from '../../utils/time';

interface Props extends ImageProps {
  camera: string;
  rover: string;
  date: string;
}

export const PhotoCard = memo(({camera, rover, date, ...props}: Props) => {
  const formattedDate = useMemo(() => formatISO(date), [date]);

  return (
    <CardContainer>
      <Image {...props} />
      <Gradient
        colors={[THEME.colors.gradientDark, THEME.colors.gradientLight]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Rover>{rover}</Rover>
        <Info>{camera}</Info>
        <Info>{formattedDate}</Info>
      </Gradient>
    </CardContainer>
  );
});

const Image = styled.Image`
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  aspect-ratio: 0.64;
`;

const Gradient = styled(LinearGradient)`
  position: absolute;
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  width: 100%;
  height: 100%;

  padding: 24px;
`;

const CardContainer = styled.View`
  border-radius: ${({theme}) => theme.borderRadius.card}px;
  aspect-ratio: 0.64;
  box-shadow: 0px 16px 24px ${({theme}) => theme.colors.shadowBig};
  elevation: 3;
`;

const Metadata = styled.Text`
  color: ${({theme}) => theme.colors.textContrast};
`;

const Rover = styled(Metadata)`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSize.titleBig}px;
  letter-spacing: 0.15px;
  line-height: 28px;

  margin-bottom: 4px;
`;

const Info = styled(Metadata)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.info}px;
  letter-spacing: 0.75px;
  line-height: 20px;
`;
