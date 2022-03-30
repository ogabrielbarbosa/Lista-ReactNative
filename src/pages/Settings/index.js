import React, { useState, useEffect, useRef, useContext} from 'react';
import { StatusBar, TouchableOpacity, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import { Modalize } from 'react-native-modalize';

import { 
  Body,
  Container,
  TextHeader
} from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Settings(){
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const modalizeRef = useRef(null);

  return(
    <Body>
      <Container>
        <TextHeader>
          Configurações
        </TextHeader>
      </Container>
    </Body>
  );
}