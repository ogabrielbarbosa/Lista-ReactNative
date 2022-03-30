import React from 'react';
import { View, Modal, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { 
  Container,
  ContainerModal,
  ContainerTop,
  ContainerMid,
  ContainerBottom,
  TextSend,
  BoxItem
} from './styles';

export default function ModalItem({data, close}) {
 return (
    <Modal transparent={true} animationType="slide">
      <Container>
        <ContainerModal>
          <ContainerTop>
            <Feather name="x" color={'#000'} size={40} onPress={close}/>
          </ContainerTop>
          <ContainerMid>
            <TextSend>
              Enviado por: {data.nomeEnviado}
            </TextSend>
            <BoxItem>

            </BoxItem>
            <TextSend>
              5 de mar de 2022
            </TextSend>
          </ContainerMid>

          <ContainerBottom>

          </ContainerBottom>
        </ContainerModal>
      </Container>
    </Modal>
  );
}