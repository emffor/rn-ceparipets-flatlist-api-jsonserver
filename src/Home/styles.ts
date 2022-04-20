import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    
    margin: 70px 0px;
    
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.tertiary_700};
`;