import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Dog } from '../../components/Dog';
import api from '../../services/api';
import { DogDTO } from '../../dtos/DogDTO';

import {
  Container,
  Header,
  HeaderContent,
  Form,
  DogList,
} from './styles';

export function Home(){

  const [dogs, setDogs] = useState<DogDTO[]>([]);
  const [loading, setLoading] = useState(true);

  //no momento que a interface home for aberta - quero que ele va na api e busque os dados importantes para mim.

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await api.get('/dogs');
        setDogs(response.data);

      } catch (error) {
        console.log(error);

      }finally{
        setLoading(false);
      }

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
                data={dogs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Dog data={item}/>}  
            />
        </Form>

    </Container>
  );
}