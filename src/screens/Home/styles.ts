import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 170px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;
  padding: 0px 40px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  padding: 0px 15px;
`;

export const DogList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  
`;
