import React, { useContext, useState } from 'react';
import { View, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Body,
  Container,
  ContainerTop,
  ContainerMid,
  ContainerBottom,
  TextHeader,
  ContanerInputText,
  TextInput,
  ForgotText,
  ButtonBottom,
  TextButton,
  OrText,
  ContainerLogins,
  LoginBox,
  RegisterText,
  RegisterTextButton
} from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signGoogle } = useContext(AuthContext);

  async function handleLogin() {
    console.log('1');
    await signIn(email, password);
    console.log('2');
  }

  async function onGoogleButtonPress() {
    await signGoogle();
  }

  return (
    <Body >
      <Container
        behavior="position">
        <ContainerMid>
          <Image
            source={require('../../assets/signin.png')}
            style={{
              width: 250,
              height: 200,
              alignSelf: 'center',
              marginBottom: '5%'
            }}
          />
          <TextHeader>
            Login
          </TextHeader>
          <ContanerInputText>
            <Entypo name="email" size={20} color="#9298a6"></Entypo>
            <TextInput
              placeholder="Email"
              selectionColor='#0165ff'
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </ContanerInputText>
          <ContanerInputText>
            <MaterialCommunityIcons name="form-textbox-password" size={20} color="#9298a6"></MaterialCommunityIcons>
            <TextInput
              placeholder="Senha"
              selectionColor='#0165ff'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}><ForgotText>Esqueceu?</ForgotText></TouchableOpacity>
          </ContanerInputText>
          <ButtonBottom onPress={handleLogin}>
            <TextButton>
              Login
            </TextButton>
          </ButtonBottom>
          <OrText>Ou, faça login com...</OrText>
          <ContainerLogins>
            <LoginBox onPress={() => onGoogleButtonPress()}>
              <AntDesign name="google" size={20} color="#9298a6" />
            </LoginBox>
            <LoginBox>
              <Entypo name="facebook" size={20} color="#9298a6" />
            </LoginBox>
            <LoginBox>
              <AntDesign name="twitter" size={20} color="#9298a6" />
            </LoginBox>
          </ContainerLogins>
        </ContainerMid>

        <ContainerBottom>
          <RegisterText onPress={() => navigation.navigate("Register")}>Novo por aqui? <RegisterTextButton>Registrar</RegisterTextButton></RegisterText>
        </ContainerBottom>
      </Container>
    </Body>
  );
}
