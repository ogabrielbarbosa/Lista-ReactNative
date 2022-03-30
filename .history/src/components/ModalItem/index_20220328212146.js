import React from 'react';
import { View, Modal, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { 
  Container,
  ContainerModal,
  ContainerTop,
  ContainerMid,
  ContainerBottom
} from './styles';

export default function ModalItem({data, close}) {
 return (
    <Modal transparent={true} animationType="slide">
      <Container>
        <ContainerModal>
          <ContainerTop>
            {/*
              <Feather name="x" color={'#000'} size={25} onPress={close}/>
            */}
          </ContainerTop>
          <ContainerMid>

          </ContainerMid>
          <ContainerBottom>
              
          </ContainerBottom>
        </ContainerModal>
      </Container>
    </Modal>
  );
}