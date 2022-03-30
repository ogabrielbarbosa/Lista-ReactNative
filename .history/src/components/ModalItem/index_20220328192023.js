import React from 'react';
import { View, Modal } from 'react-native';

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
        </Container>
    </Modal>
  );
}