import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Dog } from '../../components/Dog';

import {
  Container,
  Header,
  HeaderContent,
  Form,
  DogList,
} from './styles';

export function Home(){

  const dogs = {
    image: 'https://magazine.education.investing.com/br/wp-content/uploads/sites/4/2021/09/Article-Image-Most-Expensive-Dog-Breeds-In-The-World-Maltese-1.jpg',
    breed: 'Maltês',
    country: 'Malta',
    price: 'R$ 5.000,00',
  }

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
                width={RFValue(240)}
                height={RFValue(120)}
            />
         </HeaderContent>
        </Header>

        <Form>


            <DogList 
                data={[1,2,3,4,5,6,7,8,9,10]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Dog data={dogs}/>}  
            />
        </Form>

    </Container>
  );
}