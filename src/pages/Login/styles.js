import { PermissionsAndroid } from "react-native";
import styled from "styled-components/native";

export const Body = styled.View`
  flex:1;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  margin: 10% 10% 10% 10%;
`;

export const TextHeader = styled.Text`
  color: ${props => props.theme.text};
  font-size: 30px;
  margin-bottom: 5%;
  font-family: Poppins-Medium;
`;

export const ContanerInputText = styled.View`
  border-bottom-width: 1px;
  border-color: #9298a6;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2%;
`;

export const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
`;

export const ForgotText = styled.Text`
  color: #0165ff;
  font-size: 15px;
`;

export const ButtonBottom = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #0165ff;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const OrText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 5%;
`;

export const ContainerLogins = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10%;
`;

export const LoginBox = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #9298a6;
  justify-content: center;
  align-items: center;
`;

export const RegisterText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.text};
  text-align: center;
`;

export const RegisterTextButton = styled.Text`
  font-size: 15px;
  color: #0165ff;
`;
