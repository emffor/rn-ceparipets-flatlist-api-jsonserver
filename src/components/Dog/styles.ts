import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    
    flex-direction: row;
    
    justify-content: flex-start;
    align-items: center;

    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(10)}px;

    border-radius: ${RFValue(10)}px;
    border: 1px solid ${({ theme }) => theme.colors.line};
`;

export const DogImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    
    margin-right: ${RFValue(8)}px;
`;  

export const Description = styled.View``;   

export const Breed = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(16)}px;
`; 

export const Country = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
`;   

export const Price = styled.Text``; 

export const Bold = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;
`; 