import styled from "styled-components/native";

export const Body = styled.View`
  flex:1;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.View`
  flex: 1;
  margin: 10% 5% 5% 5%;
`;

export const TextHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;

`;

export const TextHeader = styled.Text`
  color: ${props => props.theme.text};
  font-size: 30px;
  font-family: Poppins-Medium;
  text-transform: capitalize;
`;

export const ContainerItems = styled.View`
  flex: 1;
`;

export const Items = styled.TouchableOpacity`
  height: 150px;
  border-radius: 15px;
  background-color: ${props => props.theme.text};
  margin-bottom: 15px;
  flex-direction: row;
`;

export const ContainerImage = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.View`
  width: 70%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ByText = styled.Text`
  color: ${props => props.theme.background};
  font-size: 15px;
  font-family: Poppins-Medium;
`;

export const ItemText = styled.Text`
  color: ${props => props.theme.background};
  font-size: 25px;
  font-family: Poppins-Medium;
`;

export const AddItem = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 50px
  background-color: #0165ff;
  justify-content: center;
  align-items: center;
`;

export const ContanerInputText = styled.View`
  border-bottom-width: 1px;
  border-color: #9298a6;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
`;

export const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
`;

export const ForgotText = styled.Text`
  color: #0165ff;
  font-size: 15px;
  margin-left: 30%
`;

export const TextsHeaderContainer = styled.View`
  flex-direction: column;
`;

export const TextInvite = styled.Text`
  color: #808080;
  font-size: 15px;
  font-family: Poppins-Medium;
  margin-right: 2%;
`;

export const BoxItens = styled.View`
  width: 80px;
  height: 30px;
  border-radius: 200px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const TextCategoria = styled.Text`
  font-size: 15px;
  color: #fff;
`;