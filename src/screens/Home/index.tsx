import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  HeaderContent,
  TitleHeader,
} from './styles';

export function Home(){
  return (
    <Container>

      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />

        <Header>
         <HeaderContent>
            <Logo
                width={RFValue(50)}
                height={RFValue(50)}
            />

            <TitleHeader>PetShop do Bairro</TitleHeader>
         </HeaderContent>
        </Header>

    </Container>
  );
}