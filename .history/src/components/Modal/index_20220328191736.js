import React from 'react';
import { View, Modal } from 'react-native';

export default function Modal() {
 return (
    <Modal transparent={true} animationType="slide">
        <Container>
        <View style={{
            height: '100%',
            backgroundColor: 'red'
        }}>
            <Feather name="x" color={'#000'} size={25} onPress={()=>setModalVisible(false)}/>
        </View>
        </Container>
    </Modal>
  );
}