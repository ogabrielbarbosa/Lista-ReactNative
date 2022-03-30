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
`;

export const AddItem = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${props => props.theme.text};
  font-size: 30px;
  margin-bottom: 5%;
  font-family: Poppins-Medium;
`;

export const List = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  background-color: #0165ff;
  margin-bottom: 15px;
  justify-content: space-around;
`;

export const ListName = styled.Text`
  font-size: 30px;
  color: #fff;
  margin: 0% 0% 0% 5%;
  text-transform: capitalize;
`;

export const BoxItens = styled.View`
  width: 80px;
  height: 30px;
  border-radius: 200px;
  margin: 0% 0% 0% 5%;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const TextItens = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const Photo = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #fff;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 80px;
`;

export const New = styled.TouchableOpacity`
  width: 100%;
  height: 75px;
  border-radius: 15px;
  background-color: #808080;
  justify-content: center;
  align-items: center;
`;

export const ContainerPlus = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #606060;
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
  justify-content: space-around;
`;

export const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
`;

export const ForgotText = styled.Text`
  color: #0165ff;
  font-size: 15px;
`;

export const ContainerPlaces = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextPlaces = styled.Text`
  color: #0165ff;
  font-size: 15px;
  margin-bottom: 5%;
`;

export const TextUpdate = styled.Text`
  color: #fff;
  font-size: 15px;
  margin: 0% 0% 0% 5%;
`;