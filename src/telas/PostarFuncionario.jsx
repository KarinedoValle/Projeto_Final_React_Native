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
import SoBotao from "../components/SoBotao";

function PostarFuncionarios({ navigation }) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarios, setFuncionarios] = useState([]);

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
    const funcionarioSalvo = funcionarios.filter((funcionario) => {
      if (funcionario.cpf === cpf) {
        console.log(funcionario.cpf);
        return true;
      }
      return false;
    });

    if (funcionarioSalvo.length <= 0) {
      console.log("retorno da verificação", funcionarioSalvo);
      Api.post(`/funcionario`, { nome: nome, cpf: cpf })
        .then(() => {
          Alert.alert("Usuário cadastrado com sucesso!");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("retorno da else", funcionarioSalvo);
      Alert.alert("Este CPF já está cadastrado.");
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
          <SoBotao
            textstyle={InserirStyle.botaoTxt}
            text="Enviar"
            onPress={salvar}
            botaostyle={InserirStyle.botao}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default PostarFuncionarios;
