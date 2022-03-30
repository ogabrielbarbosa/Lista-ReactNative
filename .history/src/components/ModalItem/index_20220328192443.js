import React from 'react';
import { View, Modal, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { 
    Container
} from './styles';

export default function ModalItem({data, close}) {
 return (
    <Modal transparent={true} animationType="slide">
        <Container>
        <View style={{
            height: '100%',
            backgroundColor: 'red'
        }}>
            <Feather name="x" color={'#000'} size={25} onPress={close}/>
        </View>
            <Text style={{fontSize: 50}}>{data.produto}a</Text>
        </Container>
    </Modal>
  );
}