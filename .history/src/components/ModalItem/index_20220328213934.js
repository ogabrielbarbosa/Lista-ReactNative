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
  BoxItem,
  TextItem,
  BoxCategoria,
  TextCategoria,
  TextDelete
} from './styles';

export default function ModalItem({data, close}) {
 return (
    <Modal transparent={true} animationType="none">
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
            <TextItem>
              {data.produto}
            </TextItem>
            <BoxCategoria>
              <TextCategoria>
                Doce
              </TextCategoria>
            </BoxCategoria>
          </ContainerMid>
          <ContainerBottom>
            <TextDelete>
              Excluir item
            </TextDelete>
          </ContainerBottom>
        </ContainerModal>
      </Container>
    </Modal>
  );
}