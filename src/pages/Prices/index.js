import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, StyleSheet, FlatList, useColorScheme, TouchableOpacity, Dimensions, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';
import { Modalize } from 'react-native-modalize';
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

export default function Prices() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const modalizeRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [createData, setCreateData] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');

  const deviceTheme = useColorScheme();

  const [loading, setLoadgin] = useState(true);

  const theme = themes[deviceTheme] || theme.dark;

  useEffect(() => {

    async function loadProducts() {
      await firestore().collection('products')
        .where('personId', '==', user.uid)
        .orderBy('createData', 'desc')
        .onSnapshot((doc) => {
          let myProducts = [];

          doc.forEach((item) => {
            myProducts.push({
              ...item.data(),
              id: item.id
            })
          });

          setProducts(myProducts);

        });
      setLoadgin(false);
    }

    loadProducts();

  }, []);

  async function createProduct() {
    if (nomeProduto == '') {
      alert('Porfavor, preencha o campo nome do produto')
    } else {
      await firestore().collection('products').add({
        nomeProduto: nomeProduto,
        personId: user.uid,
        createData: createData
      });
      setNomeProduto('');
      modalizeRef.current?.close();
    }
  }

  function openModal() {
    modalizeRef.current?.open();
    var monthNames = ['jan', 'fev', 'mar', 'abr', 'maio', 'jun',
      'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    setCreateData(
      date + ' de ' + month + ' de ' + year + ' | ' + hours + ':' + minutes
    );
  }

  return (
    <Body>
      <Container>
        <TextHeader>
          Preços de produtos
        </TextHeader>

        {products.length === 0 ? (
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
            data={products}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: '15%' }}
            ListFooterComponent={() =>
              <New onPress={openModal}>
                <ContainerPlus>
                  <Feather name="plus" color={'#fff'} size={30} />
                </ContainerPlus>
              </New>
            }
            renderItem={({ item }) =>
              <View style={{
                height: 200,
                width: Dimensions.get('window').width / 2 - 35,
                backgroundColor: theme.background,
                margin: 8,
                borderRadius: 10,
                ...styles.shadow
              }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={()=>{navigation.navigate("PricesProducts", {createData: item.createData, nomeProduto: item.nomeProduto, personId: item.personId, id: item.id})}}
                >
                  <View style={[styles.image, { backgroundColor: '#6C63FF' }]}>
                    <Image
                      style={{
                        width: 80,
                        height: 80,
                        alignSelf: 'center'
                      }}
                      source={
                        item.categoria == 'Bebidas' ? require('../../assets/Items/Bebidas.png') :
                          item.categoria == 'Doces' ? require('../../assets/Items/Doces.png') :
                            item.categoria == 'Enlatados' ? require('../../assets/Items/Enlatados.png') :
                              item.categoria == 'Frutas' ? require('../../assets/Items/Frutas.png') :
                                item.categoria == 'Higiene' ? require('../../assets/Items/Higiene.png') :
                                  item.categoria == 'Legumes' ? require('../../assets/Items/Legumes.png') :
                                    item.categoria == 'Limpeza' ? require('../../assets/Items/Limpeza.png') :
                                      item.categoria == 'Pão' ? require('../../assets/Items/Pão.png') :
                                        item.categoria == 'Pereciveis' ? require('../../assets/Items/Pereciveis.png') :
                                          require('../../assets/Items/Outros.png')
                      }
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                  <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: theme.text
                  }}>{item.nomeProduto}</Text>
                  <Feather name="more-vertical" color={theme.text} size={20} />
                </View>
              </View>
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
              Criar um produto?
            </TextHeader>
            <ContanerInputText>
              <Ionicons name="list" size={20} color="#9298a6" />
              <TextInput
                placeholder="Nome do produto"
                selectionColor='#0165ff'
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                value={nomeProduto}
                onChangeText={(text) => setNomeProduto(text)}
              />
              <TouchableOpacity onPress={createProduct}><ForgotText>Criar</ForgotText></TouchableOpacity>
            </ContanerInputText>
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
    justifyContent: 'center',
    backgroundColor: '#6c63ff'
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
})