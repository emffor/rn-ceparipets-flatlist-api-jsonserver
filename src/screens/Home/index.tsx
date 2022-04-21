import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Dog } from '../../components/Dog';
import api from '../../services/api';

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

  //no momento que a interface home for aberta - quero que ele va na api e busque os dados importantes para mim.

  useEffect(() => {
    async function fetchDogs() {
      const response = await api.get('');
      console.log(response);
    }

    fetchDogs();
  },[])

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