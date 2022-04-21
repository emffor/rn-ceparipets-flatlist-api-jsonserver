import React from 'react';

import {
  Container,
  DogImage,
  Description,
  Breed,
  Country,
  Price,
  Bold,
} from './styles';

interface DogData {
    image: string;
    breed: string;
    country: string;
    price: string;
}

interface Props {
    data: DogData;
}


export function Dog({ data }: Props) {
  return (
    <Container>
            <DogImage 
                source={{uri: data.image}}
                
            />
            <Description>
                <Breed>{data.breed}</Breed>
                <Country>
                    <Bold>País de Origem: </Bold> 
                        {data.country}
                </Country>
                <Price>
                    <Bold>Preço Médio: </Bold>
                        {data.price} 
                </Price>
            </Description>
    </Container>
  );
}