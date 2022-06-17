import React, { useContext, useState, useEffect } from 'react';
import { useColorScheme, StyleSheet, Image } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../../theme';

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Body,
  Container,
  ContainerBackground,
  BoxProfile,
  TextHeader,
  Buttons,
  TextButtons,
  ButtonBox,
  TextName,
  TextEmail,
  BoxPhoto,
  Avatar
} from './styles';

export default function Profile() {
  const { signOut, user } = useContext(AuthContext);
  const navigation = useNavigation();
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark
  const [url, setUrl] = useState();

  useEffect(() => {
    async function loadAvatar() {
      try {
        let response = await storage().ref('users').child(user?.uid).getDownloadURL();
        setUrl(response);
      } catch (err) {
        console.log("NAO ENCONTRAMOS NENHUMA FOTO")
      }
    }

    loadAvatar();


    return () => loadAvatar();
  }, [])

  async function handleSignOut() {
    await signOut();
  }

  function uploadFile() {
    const options = {
      noData: true,
      mediaType: 'photo'
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Cancelou');
      } else if (response.error) {
        console.log('Erro');
      } else {
        uploadFileFirebase(response);

        setUrl(response.assets[0].uri);
      }
    });

  }

  function getFileLocalPath(response) {
    return response.assets[0].uri;
  }

  async function uploadFileFirebase(response) {
    const fileSource = getFileLocalPath(response);

    const storageRef = storage().ref('users').child(user?.uid);
    const url = await storageRef.getDownloadURL()
    
    firestore().collection('users').doc(user?.uid).set({
      nome: user.nome,
      email: user.email,
      urlImage: url
    });

    return await storageRef.putFile(fileSource);
  }

  async function uploadAvatarLists() {
    const storageRef = storage().ref('users').child(user?.uid);
    const url = await storageRef.getDownloadURL()
      .then(async (image) => {

      })
  }

  return (
    <Body>
      <ContainerBackground>
        <TextHeader>
          Perfil
        </TextHeader>

        <BoxProfile style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}>
          {url ? (
            <BoxPhoto onPress={uploadFile}>
              <Avatar source={{ uri: url }} />
            </BoxPhoto>
          ) : (
            <BoxPhoto onPress={uploadFile}>
              <Avatar source={{ uri: user.urlImage }} />
            </BoxPhoto>
          )}
          <TextName>{user.nome}</TextName>
          <TextEmail>{user.email}</TextEmail>
        </BoxProfile>
      </ContainerBackground>
      <Container>
        <Buttons onPress={() => navigation.navigate('PersonData')}>
          <ButtonBox onPress={() => navigation.navigate('PersonData')}>
            <Feather name="user" color={'#fff'} size={20} />
          </ButtonBox>
          <TextButtons>
            Dados pessoais
          </TextButtons>
        </Buttons>

        <Buttons onPress={() => navigation.navigate('Settings')}>
          <ButtonBox onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" color={'#fff'} size={20} />
          </ButtonBox>
          <TextButtons>
            Configurações
          </TextButtons>
        </Buttons>

        <Buttons onPress={() => navigation.navigate('AboutApp')}>
          <ButtonBox onPress={() => navigation.navigate('AboutApp')}>
            <Feather name="globe" color={'#fff'} size={20} />
          </ButtonBox>
          <TextButtons>
            Sobre esse aplicativo
          </TextButtons>
        </Buttons>

        <Buttons onPress={handleSignOut}>
          <ButtonBox onPress={handleSignOut}>
            <MaterialIcons name="logout" color={'#fff'} size={20} />
          </ButtonBox>
          <TextButtons>
            Sair
          </TextButtons>
        </Buttons>

      </Container>
    </Body>
  );
}

