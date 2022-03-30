import React, { useState, useEffect, useRef, useContext, useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, useColorScheme, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Modalize } from 'react-native-modalize';
import { Picker } from '@react-native-picker/picker';
import * as Animatable from 'react-native-animatable'
import firestore from '@react-native-firebase/firestore';
import { 
  Body,
  Container,
  TextHeaderContainer,
  TextHeader,
  Items,
  ByText,
  Price,
  AddItem,
  ContanerInputText,
  TextInput,
  ForgotText,
  TextsHeaderContainer,
  BoxItens,
  TextCategoria
} from './styles';
 
import themes from '../../theme';

export default function PricesProducts({ route }){
  const { user } = useContext(AuthContext);
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark;
  const modalizeRef = useRef(null);
  
  const [lastUpdate, setLastUpdate] = useState('');
  const [nameList, setNameList] = useState(route.params.nomeCasa);

  const [market, setMarket] = useState('');
  const [price, setPrice] = useState('');
  const [lista, setLista] = useState([]);

  const [selectCategoria, setSelectCategoria] = useState('');

  const viewRef = useRef(null);

  const colorAr = [
    '#637aff',
    '#60c5a8',
    '#CCCCCC',
    '#ff5454',
    '#039a83',
    '#dcb834',
    '#8f06e4',
    'skyblue',
    '#ff4c98',
  ]
  const bgColor = (i) => colorAr[i % colorAr.length];
  useEffect(()=>{

    async function loadCasas(){
      await firestore().collection('comparation')
      .where('priceId', '==', route.params.id)
      .onSnapshot((doc)=>{
        let myPlaces = [];

        doc.forEach((item)=>{
          myPlaces.push({
            ...item.data(),
            id: item.id
          })
        });
        setLista(myPlaces);
        
      });

    }

    loadCasas();

  }, []);
  
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

  const totalItems = useMemo(()=> lista.length, [lista]);
  
  async function createProduct(){
    if(market == '' && price == ''){
      alert('Preencha o campo: Item');
    }else{
      await firestore().collection('comparation').add({
        createData: lastUpdate,
        market: market,
        priceId: route.params.id,
        price: price
      });

      modalizeRef.current?.close();
    }
    
  }
  
  return(
    <Body>
      <Container>
        <TextHeaderContainer>
          <TextsHeaderContainer>
            <TextHeader> 
              {nameList}
            </TextHeader>
            <TextInvite>
              {route.params.ID}
            </TextInvite>
          </TextsHeaderContainer>
          
          <AddItem onPress={openModal}>
           <Feather name="plus" color={'#fff'} size={35} />
          </AddItem>
        </TextHeaderContainer>
      
        <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        duration={500}>
          <FlatList
          data={lista}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: '15%' }}
          renderItem={({item, index})=>
            <Animatable.View
            animation={'zoomIn'}
            duration={1000}
            delay={index * 300}>
              <View style={styles.listItem}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Screen')}>
                  <View style={[styles.image, { backgroundColor: bgColor(index) }]}>
                    
                  </View>
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                  <Text style={styles.name}>R$:{item.price}</Text>
                  <Feather name="more-vertical" color={'#000'} size={20} />
                </View>
              </View>
            </Animatable.View>
          }
          />
        </Animatable.View>
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
              Comparar preço?
            </TextHeader>
            <ContanerInputText>
            <Ionicons name="list" size={20} color="#9298a6"/>
              <TextInput
              placeholder="Nome do mercado"
              selectionColor='#0165ff'
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={market}
              onChangeText={ (text) => setMarket(text) }
              />
                <TouchableOpacity onPress={createProduct}><ForgotText>Criar</ForgotText></TouchableOpacity>
            </ContanerInputText>
            <ContanerInputText>
            <Ionicons name="list" size={20} color="#9298a6"/>
              <TextInput
              placeholder="Preço do produto"
              selectionColor='#0165ff'
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              value={price}
              onChangeText={ (text) => setPrice(text) }
              /></ContanerInputText>
          </Container>
        </Body>
      </Modalize>
    </Body>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 36,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})