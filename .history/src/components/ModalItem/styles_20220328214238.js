import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 10% 5% 5% 5%;
  background-color: rgba(0, 0, 0, 0.51);
`;

export const ContainerModal = styled.View`
  height: 90%;
  background-color: #fff;
  border-radius: 15px;
`;

export const ContainerTop = styled.View`
  width: 100%;
  height: 15%;
  justify-content: center;
  padding-left: 5%
`;

export const ContainerMid = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  background-color: blue;
  justify-content: center;
`;

export const TextSend = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const BoxItem = styled.View`
  width: 85%;
  height: 200px;
  margin: 5% 0% 5% 0%;
  background-color: blue;
  border-radius: 15px;
`;

export const TextItem = styled.Text`
  font-size: 25px;
  margin: 5% 0% 5% 0%;
  color: #000;
`;

export const BoxCategoria = styled.View`
  height: 40px;
  background-color: blue;
  aling-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const TextCategoria = styled.Text`
  font-size: 20px;
  margin: 0% 5% 0% 5%;
  color: #fff;
`;

export const TextDelete = styled.Text`
  font-size: 15px;
  margin: 0% 5% 0% 5%;
  color: red;
`;
