import styled from 'styled-components/native';
import { DogDTO } from '../../dtos/DogDTO';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 170px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;
  padding: 0px 20px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-bottom: ${RFValue(170)}px;
`;

export const DogList =styled(FlatList as new (props: FlatListProps<DogDTO>) => FlatList<DogDTO>).attrs({
  contentContainerStyle: {
    padding: 12,
  },
  showsVerticalScrollIndicator: false,
})`
  
`;
