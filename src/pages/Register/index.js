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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { signUp } = useContext(AuthContext);

  async function handleRegister() {
    await signUp(email, password, name);
  }

  return (
    <Body>
      <Container
        behavior="position">
        <ContainerMid>
          <Image
            source={require('../../assets/signup.png')}
            style={{
              width: 250,
              height: 200,
              alignSelf: 'center',
              marginBottom: '5%'
            }}
          />
          <TextHeader>
            Registrar
          </TextHeader>
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
          <OrText>Ou, se registre com...</OrText>
          <ContanerInputText>
            <Ionicons name="person" size={20} color="#9298a6"></Ionicons>
            <TextInput
              placeholder="Nome"
              selectionColor='#0165ff'
              autoCorrect={false}
              autoCapitalize="none"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </ContanerInputText>
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
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </ContanerInputText>
          <ButtonBottom onPress={handleRegister}>
            <TextButton>
              Registrar
            </TextButton>
          </ButtonBottom>
        </ContainerMid>

        <ContainerBottom>
          <RegisterText onPress={() => navigation.navigate("Login")}>Já tem uma conta? <RegisterTextButton>Login</RegisterTextButton></RegisterText>
        </ContainerBottom>
      </Container>
    </Body>
  );
}
