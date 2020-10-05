import React, {useEffect} from "react";
import { Text } from "react-native";
import Api from '../api/Api'

function ListarFuncionarios() {
  useEffect(() => {
    Api.get(`/funcionario`).then(response => {
      console.log(response.data)
    }).catch(error => console.log(error))
  })

  return (
    <>
    <Text>Tela ListarFuncionarios</Text>
    </>
  );
}

export default ListarFuncionarios;
