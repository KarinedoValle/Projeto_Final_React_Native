import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";
import Api from '../api/Api'

function Buscar() {
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
      <Text>Tela Buscar</Text>
      <TextInput style = {{borderColor: 'black', borderWidth: 2, marginHorizontal: 10}} onChangeText = {text => {setId(text)}}></TextInput>
    </>
  );
}

export default Buscar;
