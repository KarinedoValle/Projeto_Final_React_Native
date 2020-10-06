import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";
import AtualizarStyle from '../styles/AtualizarStyles'

function AtualizarFuncionarios() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarioSalvo, setFuncionarioSalvo] = useState({});

  const salvar = () => {
    if (nome === null) {
      setNome(funcionarioSalvo.nome);
    }

    if (cpf === null) {
      setCpf(funcionarioSalvo.cpf);
    }
    Api.put(`/funcionario/${id}`, { nome: nome, cpf: cpf })
      .then((response) => {
        console.log("Esse foi enviado: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setFuncionarioSalvo(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
    <SafeAreaView style={AtualizarStyle.fundo}>
      <View style={AtualizarStyle.body}>
      <Text style={AtualizarStyle.titulo}>Tela AtualizarFuncionarios</Text>
      <TextInput
        style={AtualizarStyle.input}
        onChangeText={(text) => {
          setId(text);
        }}
        placeholder="Id"
      ></TextInput>
      <TextInput
        style={AtualizarStyle.input}
        onChangeText={(text) => {
          setNome(text);
        }}
        placeholder="Nome"
      ></TextInput>
      <TextInput
        style={AtualizarStyle.input}
        onChangeText={(text) => {
          setCpf(text);
        }}
        placeholder="CPF"
      ></TextInput>
      <TouchableOpacity
        style={AtualizarStyle.botao}
        onPress={salvar}
      >
        <Text>Enviar</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
    </>
  );
}

export default AtualizarFuncionarios;
