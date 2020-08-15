import React, {useCallback} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

import {
  Container,
  Image,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';

import SuccessImage from '../../assets/success.png';

interface RouteParams {
  title: string;
  description: string;
  returnTo: string;
  buttonText: string;
}

const Success: React.FC = () => {
  const {reset} = useNavigation();
  const {params} = useRoute();

  const routeParams = params as RouteParams;

  const returnTo = useCallback(
    (route: string) => {
      reset({
        index: 0,
        routes: [{name: route}],
      });
    },
    [reset],
  );

  return (
    <Container>
      <Image source={SuccessImage} resizeMode="cover" />

      <Title>{routeParams.title}</Title>

      <Description>{routeParams.description}</Description>

      <Button onPress={() => returnTo(routeParams.returnTo)}>
        <ButtonText>{routeParams.buttonText}</ButtonText>
      </Button>
    </Container>
  );
};

export default Success;
