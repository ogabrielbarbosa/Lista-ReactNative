import React from 'react';
import { View, Modal, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { 
  Container,
  ContainerModal
} from './styles';

export default function ModalItem({data, close}) {
 return (
    <Modal transparent={true} animationType="slide">
      <Container>
          <ContainerModal>
              <Feather name="x" color={'#000'} size={25} onPress={close}/>
              <Text>{data.produto}</Text>
          </ContainerModal>
      </Container>
    </Modal>
  );
}