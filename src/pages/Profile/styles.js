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

export const Buttons = styled.TouchableOpacity`
  width: 100%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-color: ${props => props.theme.text};
  justify-content: space-between;
`;

export const TextButtons = styled.Text`
  color: ${props => props.theme.text};
  font-size: 20px;
  font-family: Poppins-Medium;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 100%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-color: red;
  justify-content: space-between;
`;

export const TextLogout = styled.Text`
  color: red;
  font-size: 20px;
  font-family: Poppins-Medium;
`;