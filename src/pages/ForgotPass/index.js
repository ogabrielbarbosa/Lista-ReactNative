import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Body,
  Container,
  ContainerTop,
  ContainerMid,
  TextHeader,
  ContanerInputText,
  TextInput,
  ButtonBottom,
  TextButton
} from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';

export default function ForgotPass() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  async function resetPassword() {
    await auth().sendPasswordResetEmail(email).then(() => {
      navigation.navigate('Login');
    })
  }

  return (
    <Body>
      <Container
        behavior="padding">
        <ContainerMid>
          <Image
            source={require('../../assets/forgot.png')}
            style={{
              width: 250,
              height: 150,
              alignSelf: 'center',
              marginBottom: '5%'
            }}
          />
          <TextHeader>
            Esqueceu a senha?
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
          <ButtonBottom onPress={resetPassword}>
            <TextButton>
              Resetar senha
            </TextButton>
          </ButtonBottom>
        </ContainerMid>
      </Container>
    </Body>
  );
}
