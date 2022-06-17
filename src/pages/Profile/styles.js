import styled from "styled-components/native";

export const Body = styled.View`
  flex:1;
  background-color: ${props => props.theme.background};
`;

export const ContainerBackground = styled.View`
  background-color: #6C63FF;
  padding: 10% 5% 0% 5%;
  height: 30%;
`;

export const BoxProfile = styled.View`
  position: absolute;
  margin: 30% 5% 0% 5%;
  width: 100%;
  height: 122%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.View`
  height: 70%;
  margin: 30% 5% 5% 5%;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 5%;
  font-family: Poppins-Medium;
`;

export const Buttons = styled.TouchableOpacity`
  width: 100%;
  height: 12%;
  flex-direction: row;
  align-items: center;
  border-color: ${props => props.theme.text};
`;

export const TextButtons = styled.Text`
  color: ${props => props.theme.text};
  font-size: 20px;
  font-family: Poppins-Medium;
  margin-left: 5%;
`;

export const ButtonBox = styled.TouchableOpacity`
  background-color: #6C63FF; 
  padding: 3%;
  border-radius: 100px;
  align-items: center;
`;

export const TextName = styled.Text`
  color: ${props => props.theme.text};
  font-size: 30px;
  font-family: Poppins-Medium;
`;

export const TextEmail = styled.Text`
  color: ${props => props.theme.text};
  font-size: 15px;
  font-family: Poppins-Medium;
`;

export const BoxPhoto = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #6C63FF;
  margin-bottom: 2%;
`;

export const Avatar = styled.Image`
  width: 80;
  height: 80;
  border-radius: 80px;
  border: 2px solid #6C63FF;
`;