import React, {useEffect, useState} from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";

function DeletarFuncionarios() {
  const [id, setId] = useState('')

  useEffect(() => {
    if(id !== '') {
    Api.get(`/funcionario/${id}`).then(response => {
      console.log(response.data)
    }).catch(error => console.log(error))
  }
  }, [id])

  return (
    <>
    <Text>Tela DeletarFuncionarios</Text>
    <TextInput style = {{borderColor: 'black', borderWidth: 2, marginHorizontal: 10}} onChangeText = {text => {setId(text)}}></TextInput>
    </>
  );
}

export default DeletarFuncionarios;
