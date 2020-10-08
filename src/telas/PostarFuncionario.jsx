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

function PostarFuncionarios({ navigation, route }) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarios, setFuncionarios] = useState([]);
  const { cadastro } = route.params;

  useEffect(() => {
    Api.get(`/funcionario`)
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const salvar = () => {
    if (nome === null) {
      Alert.alert("Por favor, insira um nome.");
    }

    if (cpf === null) {
      Alert.alert("Por favor, insira um CPF.");
    }
    const funcionarioSalvo = funcionarios.map((funcionario) => {
      if (funcionario.cpf === cpf) {
        return true;
      }
      return false;
    });

    if (!funcionarioSalvo) {
      Api.post(`/funcionario`, { nome: nome, cpf: cpf })
        .then(() => {
          if (cadastro === true) {
            Alert.alert("Usuário cadastrado com sucesso!");
            navigation.navigate("Welcome");
          } else {
            Alert.alert("Usuário cadastrado com sucesso!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Alert.alert("Este CPF já está cadastrado.");
      navigation.navigate("Welcome");
    }
  };

  return (
    <>
      <SafeAreaView style={InserirStyle.fundo}>
        <View style={InserirStyle.body}>
          <Text style={InserirStyle.titulo}>Cadastrar</Text>
          <TextInput
            style={InserirStyle.input}
            onChangeText={(text) => {
              setNome(text);
            }}
            placeholder="Nome"
          ></TextInput>
          <TextInput
            style={InserirStyle.input}
            onChangeText={(text) => {
              setCpf(text);
            }}
            placeholder="CPF"
          ></TextInput>
          <TouchableOpacity style={InserirStyle.botao} onPress={salvar}>
            <Text style={InserirStyle.botaoTxt}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default PostarFuncionarios;
