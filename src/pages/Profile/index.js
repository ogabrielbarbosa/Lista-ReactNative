import React, { useContext } from 'react';
import { useColorScheme } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../../theme';

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'

import { 
  Body,
  Container,
  TextHeader,
  Buttons,
  TextButtons,
  ButtonLogout,
  TextLogout
} from './styles';

export default function Profile(){
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark

  async function handleSignOut(){
    await signOut();
  }

  return(
    <Body>
      <Container>
        <TextHeader>
          Perfil
        </TextHeader>

        <Buttons onPress={()=>navigation.navigate('PersonData')}>
          <TextButtons>
            Dados pessoais
          </TextButtons>
          <Feather name="user" color={theme.text} size={25} />
        </Buttons>

        <Buttons onPress={()=>navigation.navigate('Settings')}>
          <TextButtons>
            Configurações
          </TextButtons>
          <Feather name="settings" color={theme.text} size={25} />
        </Buttons>

        <Buttons onPress={()=>navigation.navigate('AboutApp')}>
          <TextButtons>
            Sobre esse aplicativo
          </TextButtons>
          <FontAwesome name="institution" color={theme.text} size={20} />
        </Buttons>

        <ButtonLogout onPress={handleSignOut}>
          <TextLogout>
            Sair
          </TextLogout>
          <MaterialIcons name="logout" color={'red'} size={25} />
        </ButtonLogout>

      </Container>
    </Body>
  );
}