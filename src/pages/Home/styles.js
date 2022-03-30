import styled from "styled-components/native";

export const Body = styled.View`
  flex:1;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.View`
  flex: 1;
  margin: 10% 5% 5% 5%;
`;

export const TextHeader = styled.Text`
  color: ${props => props.theme.text};
  font-size: 30px;
  margin-bottom: 5%;
  font-family: Poppins-Medium;
`;

export const TextUnderHeader = styled.Text`
  color: ${props => props.theme.text};
  font-size: 15px;
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

export const TextUpdate = styled.Text`
  color: #fff;
  font-size: 15px;
  margin: 0% 0% 0% 5%;
`;