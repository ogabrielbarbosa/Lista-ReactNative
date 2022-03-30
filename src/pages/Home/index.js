import React, { useState, useEffect, useRef, useContext} from 'react';
import { StatusBar, TouchableOpacity, FlatList, View, Text, Dimensions, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import * as Animatable from 'react-native-animatable'
import { 
  Body,
  Container,
  TextHeader,
  TextUnderHeader,
  List,
  ListName,
  BoxItens,
  TextItens,
  TextUpdate
} from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home(){
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const modalizeRef = useRef(null);
  const [places, setPlaces] = useState([]);
  const [products, setProducts] = useState([]);
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
  useEffect(()=> {

    async function loadCasas(){
      await firestore().collection('places')
      .where('peoples', 'array-contains', user.uid)
      .orderBy('lastUpdate', 'desc')
      .limit(1)
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

    async function loadProducts(){
      await firestore().collection('products')
      .where('personId', '==', user.uid)
      .orderBy('createData', 'desc')
      .limit(4)
      .onSnapshot((doc)=>{
        let myProducts = [];

        doc.forEach((item)=>{
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

    loadCasas();

  }, []);


  return(
    <Body>
      <Container>
        <TextHeader>
          Olá, {user?.nome}
        </TextHeader>

        <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        duration={500}>
          <FlatList
            data={places}
            keyExtractor={ item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: '15%' }}
            ListFooterComponent={()=>
              <View>
                <TextUnderHeader>
                  Ultimos produtos cadastrados:
                </TextUnderHeader>

                <FlatList
                  data={products}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
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
                          <Text style={styles.name}>{item.nomeProduto}</Text>
                          <Feather name="arrow-right" color={'#000'} size={20} />
                        </View>
                      </View>
                    </Animatable.View>
                  }
                />
              </View>
              
            }
            renderItem={({item, index})=>
              <Animatable.View
              animation={'zoomIn'}
              duration={1000}
              delay={index * 300}>
                <TextUnderHeader>
                  Ultima lista atualizada:
                </TextUnderHeader>
                <List onPress={()=>{navigation.navigate("Place", {nomeCasa: item.nomeCasa, ownerName: item.ownerName, id: item.id, qntItems: item.qntItems})}}>
                  <ListName>{item.nomeCasa}</ListName>
                  <BoxItens>
                    <TextItens>{item.qntItems} itens</TextItens>
                  </BoxItens>
                  <TextUpdate>Atualizado em: {item.lastUpdate}</TextUpdate>
                </List>
              </Animatable.View>
            }
            />
          </Animatable.View>
      </Container>
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