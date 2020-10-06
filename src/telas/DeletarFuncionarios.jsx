import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Api from "../api/Api";
import DeletarStyle from "../styles/DeletarStyles";

function DeletarFuncionarios() {
  const [id, setId] = useState("");
  const [dados, setDados] = useState({});

  const deletar = () => {
    if (id !== "") {
      Api.delete(`/funcionario/${id}`)
        .then((response) => {
          console.log(response.data);
          console.log("Usuário deletado");
        })
        .catch((error) => console.log(error));
    } else {
      Alert.alert("Por favor, digite um Id.");
    }
  };

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setDados(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      <SafeAreaView style={DeletarStyle.fundo}>
        <View style={DeletarStyle.body}>
          <Text style={DeletarStyle.titulo}>Tela DeletarFuncionarios</Text>
          <TextInput
            style={DeletarStyle.input}
            onChangeText={(text) => {
              setId(text);
            }}
            placeholder = "Insira um Id"></TextInput>
          <View style={DeletarStyle.dados}>
            <Text style={DeletarStyle.txt}>Nome: {dados.nome}</Text>
            <Text style={DeletarStyle.txt}>CPF: {dados.cpf}</Text>
          </View>
          <Text style={DeletarStyle.txtmsg}>
            Tem certeza que deseja deletar este funcionário?
          </Text>
          <TouchableOpacity style={DeletarStyle.botao} onPress={deletar}>
            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default DeletarFuncionarios;
