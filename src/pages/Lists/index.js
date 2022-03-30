import React, { useState, useEffect, useRef, useContext} from 'react';
import { Text, StyleSheet, FlatList, useColorScheme, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';
import { Modalize } from 'react-native-modalize';

import * as Animatable from 'react-native-animatable'
import { 
  Body,
  Container,
  TextHeader,
  List,
  ListName,
  BoxItens,
  TextItens,
  TextHeaderContainer,
  AddItem,
  New,
  ContainerPlus,
  ContanerInputText,
  ForgotText,
  TextInput,
  ContainerPlaces,
  TextPlaces,
  TextUpdate
} from './styles';

import themes from '../../theme';

export default function Lists(){
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);
  
  const [places, setPlaces] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [nomeLista, setNomeLista] = useState('');
  const [codeList, setCodeList] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const deviceTheme = useColorScheme();

  const [loading, setLoadgin] = useState(true);
  const viewRef = useRef(null);
  const theme = themes[deviceTheme] || theme.dark;
  useEffect(()=> {

    async function loadCasas(){
      await firestore().collection('places')
      .where('peoples', 'array-contains', user.uid)
      .orderBy('lastUpdate', 'desc')
      .onSnapshot((doc)=>{
        let myPlaces = [];

        doc.forEach((item)=>{
          myPlaces.push({
            ...item.data(),
            id: item.id
          })
        });

        setPlaces(myPlaces);

      });
      setLoadgin(false);
    }

    loadCasas();

  }, []);

  async function createList(){
    if(nomeLista==''){
      alert('Porfavor, preencha o campo nome da lista')
    }else{
      await firestore().collection('places').add({
        nomeCasa: nomeLista,
        ownerId: user.uid,
        ownerName: user.nome,
        peoples: [
          user.uid
        ],
        qntItems: 0,
        lastUpdate: lastUpdate
      });
      setNomeLista('');
      setCodeList('');
      modalizeRef.current?.close();
    }
  }

  function openModal(){
    modalizeRef.current?.open();
    var monthNames = [ 'jan', 'fev', 'mar', 'abr', 'maio','jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    var date = new Date().getDate(); 
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    setLastUpdate(
      date + ' de ' + month + ' de ' + year + ' | ' + hours + ':' + minutes
    );
  }

  function openModalJoin(){
    modalizeRef2.current?.open();
  }

  async function joinList(){
    if(codeList==''){
      alert('Porfavor, preencha o campo código da lista')
    }else{
      await firestore().collection('places')
      .doc(codeList)
      .update({
        peoples: firestore.FieldValue.arrayUnion(user.uid)
      });
      setNomeLista('');
      setCodeList('');
      modalizeRef2.current?.close();
    }
  }

  if(loading){
    return(
      <Body>
        <Container>
          <TextHeaderContainer>
            <TextHeader>Listas</TextHeader>

            <AddItem onPress={openModalJoin}>
              <Feather name="code" color={theme.text} size={30} />
            </AddItem>
          </TextHeaderContainer>

          <ContainerPlaces>
            <ActivityIndicator size={50} color="#0165ff" />
          </ContainerPlaces>
        </Container>
      </Body>
    )
  }

  return(
    <Body>
      <Container>
        <TextHeaderContainer>
          <TextHeader>Listas</TextHeader>

          <AddItem onPress={openModalJoin}>
            <Feather name="code" color={theme.text} size={30} />
          </AddItem>
        </TextHeaderContainer>

        {places.length === 0 ? (
          <ContainerPlaces>
            <TextPlaces>
              Nenhuma lista registrada, registre:
            </TextPlaces>
            <New onPress={openModal}>
              <ContainerPlus>
                <Feather name="plus" color={'#fff'} size={30} />
              </ContainerPlus>
            </New>
          </ContainerPlaces>
        ) : (
          <FlatList
          data={places}
          keyExtractor={ item => item.id}
          contentContainerStyle={{ paddingBottom: '15%' }}
          ListFooterComponent={()=>
            <New onPress={openModal}>
              <ContainerPlus>
                <Feather name="plus" color={'#fff'} size={30} />
              </ContainerPlus>
            </New>
          }
          showsVerticalScrollIndicator={false}
          renderItem={({item, index})=>
            <List style={{elevation: 0, ...styles.shadow}} onPress={()=>{navigation.navigate("Place", {nomeCasa: item.nomeCasa, ownerName: item.ownerName, id: item.id, qntItems: item.qntItems})}}>
              <ListName>{item.nomeCasa}</ListName>
              <BoxItens>
                <TextItens>{item.qntItems} itens</TextItens>
              </BoxItens>
              <TextUpdate>Atualizado em: {item.lastUpdate}</TextUpdate>
            </List>
          }
          />
        )}
      </Container>

      <Modalize
      ref={modalizeRef}
      snapPoint={500}
      modalStyle={{
        flex: 1,
        backgroundColor: theme.background
      }}
      >
        <Body>
          <Container>
            <TextHeader>
              Criar uma lista?
            </TextHeader>
            <ContanerInputText>
            <Ionicons name="list" size={20} color="#9298a6"/>
              <TextInput
              placeholder="Nome da lista"
              selectionColor='#0165ff'
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={nomeLista}
              onChangeText={ (text) => setNomeLista(text) }
              />
                <TouchableOpacity onPress={createList}><ForgotText>Criar</ForgotText></TouchableOpacity>
            </ContanerInputText>
          </Container>
        </Body>
      </Modalize>
      <Modalize
      ref={modalizeRef2}
      snapPoint={500}
      modalStyle={{
        flex: 1,
        backgroundColor: theme.background
      }}
      >
        <Body>
          <Container>
            <TextHeader>
              Entrar em uma lista?
            </TextHeader>
            <ContanerInputText>
            <Ionicons name="list" size={20} color="#9298a6"/>
              <TextInput
              placeholder="Código da lista"
              selectionColor='#0165ff'
              autoCorrect={false}
              autoCapitalize="none"
              value={codeList}
              onChangeText={ (text) => setCodeList(text) }
              />
                <TouchableOpacity onPress={joinList}><ForgotText>Entrar</ForgotText></TouchableOpacity>
            </ContanerInputText>
          </Container>
        </Body>
      </Modalize>
    </Body>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5
  }
});