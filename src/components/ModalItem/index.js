import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
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

export default function ModalItem({data, close, deleted }) {
 return (
    <Modal transparent={true} animationType="fade">
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
              {data.dataEnvio}
            </TextSend>
            <TextItem>
              {data.produto}
            </TextItem>
            <BoxCategoria>
              <TextCategoria>
                {data.categoria}
              </TextCategoria>
            </BoxCategoria>
          </ContainerMid>
          <ContainerBottom>
            <TouchableOpacity onPress={deleted}>
              <TextDelete>
                Excluir item
              </TextDelete>
            </TouchableOpacity>
          </ContainerBottom>
        </ContainerModal>
      </Container>
    </Modal>
  );
}