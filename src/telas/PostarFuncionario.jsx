import React, { useState, useEffect } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";
import InserirStyle from "../styles/InserirStyles";

function PostarFuncionarios() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarioSalvo, setFuncionarioSalvo] = useState({});

  const salvar = () => {
    if (nome === null) {
      Alert.alert("Por favor, insira um nome.");
    }

    if (cpf === null) {
      Alert.alert("Por favor, insira um CPF.");
    }
    Api.post(`/funcionario`, { nome: nome, cpf: cpf })
      .then((response) => {
        console.log("Esse foi enviado: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SafeAreaView style = {InserirStyle.fundo}>
        <View style = {InserirStyle.body}>
         
            <Text style = {InserirStyle.titulo}>Tela PostarFuncionarios</Text>
            <TextInput
              style = {InserirStyle.input}
              onChangeText={(text) => {
                setNome(text);
              }}
              placeholder="Nome"
            ></TextInput>
            <TextInput
             style = {InserirStyle.input}
              onChangeText={(text) => {
                setCpf(text);
              }}
              placeholder="CPF"
            ></TextInput>
            <TouchableOpacity
              style = {InserirStyle.botao}
              onPress={salvar}
            >
              <Text>Enviar</Text>
            </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    </>
  );
}

export default PostarFuncionarios;
