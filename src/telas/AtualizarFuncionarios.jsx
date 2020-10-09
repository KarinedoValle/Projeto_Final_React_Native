import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";
import AtualizarStyle from "../styles/AtualizarStyles";
import SoBotao from "../components/SoBotao";

function AtualizarFuncionarios() {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarioSalvo, setFuncionarioSalvo] = useState({});

  const salvar = () => {
    if (nome === null || nome === undefined || nome === "") {
      setNome(funcionarioSalvo.nome);
    }

    if (cpf === null || cpf === undefined || cpf === "") {
      setCpf(funcionarioSalvo.cpf);
    }
    Api.put(`/funcionario/${id}`, { nome: nome, cpf: cpf })
      .then((response) => {
        setNome();
        setCpf();
        setId();
        setFuncionarioSalvo({});
        Alert.alert("Sucesso", "Funcionário atualizado!");
      })
      .catch((error) => {
        Alert.alert("Erro!", "Não foi possível atualizazar!");
      });
  };

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setFuncionarioSalvo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, nome, cpf]);

  return (
    <>
      <SafeAreaView style={AtualizarStyle.fundo}>
        <View style={AtualizarStyle.body}>
          <Text style={AtualizarStyle.titulo}>Atualizar</Text>
          <TextInput
            style={AtualizarStyle.input}
            onChangeText={(text) => {
              setId(text);
            }}
            placeholder="Id"
            value={id}
          ></TextInput>
          <TextInput
            style={AtualizarStyle.input}
            onChangeText={(text) => {
              setNome(text);
            }}
            placeholder="Nome"
            value={nome}
          ></TextInput>
          <TextInput
            style={AtualizarStyle.input}
            onChangeText={(text) => {
              setCpf(text);
            }}
            placeholder="CPF"
            value={cpf}
          ></TextInput>

          <SoBotao
            textstyle={AtualizarStyle.txt}
            text="Atualizar"
            onPress={salvar}
            botaostyle={AtualizarStyle.botao}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default AtualizarFuncionarios;
